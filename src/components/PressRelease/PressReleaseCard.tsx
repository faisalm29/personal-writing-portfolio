import Image from "next/legacy/image";
import { ExternalLink } from "@/components/Icon";

type PressReleaseProps = {
  thumbnail: string;
  title: string;
  company: string;
  releaseAt: { name: string; href: string }[];
};

const PressReleaseCard = ({
  pressRelease,
}: {
  pressRelease: PressReleaseProps;
}) => {
  return (
    <div className="md:col-span-4 lg:col-span-4">
      <Image
        src={pressRelease.thumbnail}
        width={2024}
        height={1012}
        layout="responsive"
        objectFit="cover"
        alt={`campaign's thumbnail`}
        className="mb-4"
      />
      <p className="mb-2 text-sm">{pressRelease.company}</p>
      <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
        {pressRelease.title}
      </h2>
      <p className="mb-2">Release at:</p>
      <div className="flex flex-wrap justify-start gap-x-4">
        {pressRelease.releaseAt.map((publication, id) => (
          <a
            key={id}
            href={publication.href}
            className="mb-2 flex items-end gap-x-4 border-b-[1.5px] border-b-transparent pb-[2px] transition-all duration-300 ease-in-out hover:border-primary-950"
            target="_blank"
          >
            {publication.name} <ExternalLink />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PressReleaseCard;
