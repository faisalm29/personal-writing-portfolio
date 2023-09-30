import WorksCard from "./WorksCard";

import { useRouter } from "next/router";

const works = [
  {
    name: "Articles",
    description: "Works description",
    bgImageSrc: "images/articles.jpg",
    href: "/works/articles",
  },
  {
    name: "Social Media Copies",
    description: "Works description",
    bgImageSrc: "images/social-media-copies.jpg",
    href: "/works/social-media-copies",
  },
  {
    name: "Fundraising Campaigns",
    description: "Works description",
    bgImageSrc: "images/fundraising-campaigns.jpg",
    href: "/works/fundraising-campaigns",
  },
];

const Works = (): JSX.Element => {
  const route = useRouter();

  const currentPage = route.pathname;

  return (
    <section>
      <h2 className="mb-6 text-d-h2 font-bold">Works</h2>
      {currentPage === "/works" ? (
        <div className="grid grid-cols-3 grid-rows-[auto] gap-12">
          {works.map((work) => (
            <WorksCard
              name={work.name}
              description={work.description}
              bgImageSrc={work.bgImageSrc}
              href={work.href}
              key={work.name}
            />
          ))}
        </div>
      ) : (
        <div>
          {works.map((work) => (
            <WorksCard
              name={work.name}
              description={work.description}
              bgImageSrc={work.bgImageSrc}
              href={work.href}
              key={work.name}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Works;
