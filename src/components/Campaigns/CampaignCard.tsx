import Image from "next/legacy/image";

type CampaignCardProps = {
  thumbnail: string;
  title: string;
  excerpt: string;
  href: string;
};

const CampaignCard = ({ campaign }: { campaign: CampaignCardProps }) => {
  return (
    <a
      href={campaign.href}
      target="_blank"
      className="relative md:col-span-4 lg:col-span-4"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-primary-50 opacity-0 transition-all duration-300 ease-in-out hover:opacity-60"></div>
      <Image
        src={campaign.thumbnail}
        width={2024}
        height={1012}
        layout="responsive"
        objectFit="cover"
        alt={`campaign's thumbnail`}
        className="mb-4"
      />

      <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">
        {campaign.title}
      </h2>

      <p>{campaign.excerpt}</p>
    </a>
  );
};

export default CampaignCard;
