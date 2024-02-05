import works from "@/contents/works.json";
import WorkCard from "@/components/Works/WorkCard";
import WorkSectionTitle from "@/components/Works/WorkSectionTitle";

const Works = () => {
  return (
    <section className="">
      <WorkSectionTitle />
      <div className="block gap-0 md:grid md:grid-cols-8 md:gap-x-6 md:gap-y-16 lg:grid-cols-1 lg:gap-x-0">
        {works.map((work, id) => (
          <WorkCard key={id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
