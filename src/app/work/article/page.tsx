import { Metadata } from "next";
import Articles from "@/components/Articles";

export const metadata: Metadata = {
  title: "Article",
  description:
    "Passionately created and carefully researched articles on various themes.",
};

const ArticlePage = () => {
  return <Articles />;
};

export default ArticlePage;
