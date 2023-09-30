import { allArticles, type Article } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next";

import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";

const Articles: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  allArticles,
}): JSX.Element => {
  return (
    <main className="mb-16">
      <Link href="/works" className="text-primary-700">
        Works/
      </Link>
      <h1 className="mb-6 text-d-h2 font-bold">Articles</h1>
      <div className="grid grid-cols-3 grid-rows-[auto] gap-12">
        {allArticles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      allArticles,
    },
  };
};

export default Articles;
