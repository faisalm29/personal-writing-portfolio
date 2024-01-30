import Image from "next/legacy/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (file: string) => {
  const src = "./public".concat(file);
  const buffer = await fs.readFile(src);
  const plaiceholder = await getPlaiceholder(buffer);
  return { ...plaiceholder, img: { file } };
};

type ArticleProps = {
  name: string;
  description: string;
  thumbnail: string;
  href: string;
};

const ArticleCard = async ({ article }: { article: ArticleProps }) => {
  const image = await getImage(`${article.thumbnail}`);

  return (
    <a
      href={article.href}
      target="_blank"
      className="relative md:col-span-4 lg:col-span-6"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-primary-50 opacity-0 transition-all duration-300 ease-in-out hover:opacity-60"></div>
      <Image
        src={article.thumbnail}
        width={2024}
        height={1012}
        layout="responsive"
        objectFit="cover"
        alt={`${article.name}'s logo`}
        placeholder="blur"
        blurDataURL={image.base64}
        className="mb-4"
      />
      <div>
        <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
          {article.name}
        </h2>
        <p>{article.description}</p>
      </div>
    </a>
  );
};

export default ArticleCard;
