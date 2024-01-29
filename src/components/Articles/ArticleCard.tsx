import Image from "next/legacy/image";

type ArticleProps = {
  name: string;
  description: string;
  thumbnail: string;
  href: string;
};

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <a
      href={article.href}
      target="_blank"
      className="md:col-span-4 lg:col-span-6"
    >
      <Image
        src={article.thumbnail}
        width={2024}
        height={1012}
        layout="responsive"
        objectFit="cover"
        alt={`${article.name}'s logo`}
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
