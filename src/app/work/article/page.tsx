import { Metadata } from "next";
import Articles from "@/components/Articles";

export const metadata: Metadata = {
  title: "Article",
};

const ArticlePage = () => {
  return <Articles />;
};

export default ArticlePage;
