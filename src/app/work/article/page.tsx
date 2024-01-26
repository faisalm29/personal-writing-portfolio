import { Metadata } from "next";
import Articles from "@/components/Articles";

export const metadata: Metadata = {
  title: "Article",
};

const ArticlePage = () => {
  return (
    <main className="mx-auto mt-[272px] w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <Articles />
    </main>
  );
};

export default ArticlePage;
