import companies from "@/contents/companies.json";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section className="mb-48">
      <h1 className="mb-4 text-m-h3 md:text-t-h3 lg:text-d-h3">Article</h1>
      <p className="mb-12 text-sm md:mb-16">
        My articles have been published on this company&apos;s and
        organization&apos;s blog.
      </p>
      <div className="grid gap-12 md:grid-cols-8 md:gap-6 lg:grid-cols-12 lg:gap-6">
        {companies.map((company, id) => (
          <ArticleCard key={id} article={company} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
