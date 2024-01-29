import Image from "next/image";

type SocialMediaCardProps = {
  company: string;
  companyLogo: string;
  platform: string;
  title: string;
  date: string;
  href: string;
};

const SocialMediaCard = ({
  socialMedia,
}: {
  socialMedia: SocialMediaCardProps;
}) => {
  return (
    <a
      href={socialMedia.href}
      target="_blank"
      className="relative mb-12 block last:mb-0 md:mb-16"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-primary-50 opacity-0 transition-all duration-300 ease-in-out hover:opacity-30"></div>
      {/* Heading */}
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={socialMedia.companyLogo}
          alt={`${socialMedia.company}'s logo`}
          width={48}
          height={48}
          priority
        />
        <div>
          <p className="mb-2">{socialMedia.company}</p>
          <p className="text-sm">{socialMedia.platform}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
        {socialMedia.title}
      </h2>

      {/* date */}
      <time className="text-sm">{socialMedia.date}</time>
    </a>
  );
};

export default SocialMediaCard;
