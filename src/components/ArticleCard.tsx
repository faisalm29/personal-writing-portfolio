import { Article } from "contentlayer/generated";

import Link from "next/link";
import Image from "next/legacy/image";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
  return (
    <Link href={`/works/articles/${article.slug}`} className="bg-surface">
      <Image
        src={article.thumbnail}
        width={3000}
        height={2000}
        objectFit="cover"
        layout="responsive"
        alt={`${article.title} thumbnail`}
      />
      <div className="p-4 text-on-surface">
        <div className="mb-12">
          <h2 className="mb-4 text-d-h3 font-bold">{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
        <p className="underline">See more</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
