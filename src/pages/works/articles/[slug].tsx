import { InferGetStaticPropsType, NextPage } from "next/types";
import { allArticles, Article } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Fragment, useRef } from "react";

import Image from "next/legacy/image";

import siteConfig from "@/config/site";

import { useState } from "react";

import Accordion from "@/components/Accordion";

type ArticlePageProps = {
  article: Article;
};

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}: ArticlePageProps): JSX.Element => {
  const Component = useMDXComponent(article.body.code);

  return (
    <>
      <div className="flex justify-center">
        <Link href="/works" className="text-primary-700">
          Works/
        </Link>
        <Link href="/works/articles" className="text-primary-700">
          Articles/
        </Link>
      </div>

      <article className="mb-16">
        <h1 className="mb-6 text-center text-d-h2 font-bold text-on-background">
          {article.title}
        </h1>

        {/* Accordion */}
        <Accordion items={article.details} />

        {/* <div className="mb-6 hidden grid-cols-4">
          <p>
            For: <span>{article.details.for}</span>
          </p>
          <p>
            Problem: <span>{article.details.problem}</span>
          </p>
          <p>
            Goal: <span>{article.details.goal}</span>
          </p>
          <p>
            How to achieve: <span>{article.details.howToAchieve}</span>
          </p>
        </div> */}

        <div className="mb-6">
          <Image
            src={article.thumbnail}
            width={2000}
            height={1000}
            layout="responsive"
            objectFit="cover"
            alt={`${article.title} thumbnail`}
          />
        </div>

        <div className="prose mx-auto max-w-[560px]">
          <Component />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allArticles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const article = allArticles.find(
    (article) => article.slug === (params?.slug as string),
  );

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
