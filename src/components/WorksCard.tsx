import Link from "next/link";

type WorksCardProps = {
  name: string;
  description: string;
  bgImageSrc: string;
  href: string;
};

const WorksCard = ({
  name,
  description,
  bgImageSrc,
  href,
}: WorksCardProps): JSX.Element => {
  return (
    <Link
      href={href}
      className={`inline-block w-full bg-[url("/${bgImageSrc}")] mb-16 bg-cover bg-no-repeat`}
    >
      <div className="p-4 backdrop-brightness-[0.6]">
        <div className="mb-12">
          <h3 className="mb-2 text-m-h3 font-bold text-on-primary">{name}</h3>
          <p className="text-on-primary">{description}</p>
        </div>
        <p className="text-on-primary underline">See works</p>
      </div>
    </Link>
  );
};

export default WorksCard;
