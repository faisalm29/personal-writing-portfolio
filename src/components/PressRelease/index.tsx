import PressReleaseCard from "./PressReleaseCard";
import pressReleases from "@/contents/pressRelease.json";

const PressRelease = () => {
  return (
    <section>
      <h1 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
        Press Release
      </h1>
      <div className="grid gap-y-12 md:grid-cols-8 md:gap-x-6 md:gap-y-16 lg:grid-cols-12 lg:gap-x-6">
        {pressReleases.map((pressRelease, id) => (
          <PressReleaseCard key={id} pressRelease={pressRelease} />
        ))}
      </div>
    </section>
  );
};

export default PressRelease;
