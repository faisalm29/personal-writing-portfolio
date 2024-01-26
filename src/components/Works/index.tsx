import works from "@/contents/works.json";
import WorkCard from "@/components/Works/WorkCard";

const Works = () => {
  return (
    <section className="mb-48">
      <h1 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
        Selected Works
      </h1>
      <div className="block gap-0 md:grid md:grid-cols-8 md:gap-x-6 md:gap-y-16 lg:grid-cols-1 lg:gap-x-0">
        {works.map((work, id) => (
          <WorkCard key={id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
