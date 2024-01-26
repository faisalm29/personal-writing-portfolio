import socialMedias from "@/contents/socialMedias.json";
import SocialMediaCard from "./SocialMediaCard";
import { compareDesc } from "date-fns";

const sortedSocialMedias = socialMedias.sort((a, b) => {
  return compareDesc(a.date, b.date);
});

const SocialMedias = () => {
  return (
    <section className="mb-48">
      <h1 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
        Social Media
      </h1>
      <div>
        {sortedSocialMedias.map((socialMedia, id) => (
          <SocialMediaCard key={id} socialMedia={socialMedia} />
        ))}
      </div>
    </section>
  );
};

export default SocialMedias;
