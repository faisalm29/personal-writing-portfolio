import Image from "next/legacy/image";
import Link from "next/link";

type WorkCardProps = {
  type: string;
  thumbnail: string;
  description: string;
  href: string;
};

const WorkCard = ({ work }: { work: WorkCardProps }) => {
  return (
    <Link
      href={work.href}
      className="mb-12 inline-block w-full last:mb-0 md:col-span-4 md:mb-0 lg:grid lg:grid-cols-12 lg:gap-x-6"
    >
      <div className="mb-4 lg:col-span-6 lg:mb-0">
        <Image
          src={work.thumbnail}
          width={2024}
          height={1012}
          layout="responsive"
          objectFit="cover"
          alt={`${work.type}'s thumbnail`}
        />
      </div>
      <div className="lg:col-span-6">
        <h3 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
          {work.type}
        </h3>
        <p>{work.description}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
