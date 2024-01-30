"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type WorkCardProps = {
  type: string;
  thumbnail: string;
  description: string;
  href: string;
};

const WorkCard = ({ work }: { work: WorkCardProps }) => {
  const pathName = usePathname();
  return (
    <Link
      href={work.href}
      className="relative mb-12 inline-block w-full last:mb-0 md:col-span-4 md:mb-0 lg:grid lg:grid-cols-12 lg:gap-x-6"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full bg-primary-50 opacity-0 transition-all duration-300 ease-in-out hover:opacity-60"></div>
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
        {pathName === "/" ? (
          <h4 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
            {work.type}
          </h4>
        ) : (
          <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
            {work.type}
          </h2>
        )}
        <p>{work.description}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
