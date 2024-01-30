import Image from "next/legacy/image";
import Link from "next/link";
import WorkCardBody from "@/components/Works/WorkCardTitle";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (file: string) => {
  const src = "./public".concat(file);
  const buffer = await fs.readFile(src);
  const plaiceholder = await getPlaiceholder(buffer);
  return { ...plaiceholder, img: { file } };
};

type WorkCardProps = {
  href: string;
  thumbnail: string;
  type: string;
  description: string;
};

const WorkCard = async ({ work }: { work: WorkCardProps }) => {
  const { href, thumbnail, ...body } = work;
  const image = await getImage(`${thumbnail}`);
  return (
    <Link
      href={href}
      className="relative mb-12 inline-block w-full last:mb-0 md:col-span-4 md:mb-0 lg:grid lg:grid-cols-12 lg:gap-x-6"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full bg-primary-50 opacity-0 transition-all duration-300 ease-in-out hover:opacity-60"></div>
      <div className="mb-4 lg:col-span-6 lg:mb-0">
        <Image
          src={thumbnail}
          width={2024}
          height={1012}
          layout="responsive"
          objectFit="cover"
          alt={`${work.type}'s thumbnail`}
          placeholder="blur"
          blurDataURL={image.base64}
        />
      </div>
      <WorkCardBody {...body} />
    </Link>
  );
};

export default WorkCard;
