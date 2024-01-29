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
      className="md:col-span-4 lg:col-span-4"
    >
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
