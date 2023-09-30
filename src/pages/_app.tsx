import siteConfig from "@/config/site";
import Layout from "@/components/Layout";

import { NextSeo } from "next-seo";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.contacts.twitter,
          site: siteConfig.contacts.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.image}`,
              width: 1012,
              height: 506,
              alt: siteConfig.details.title,
              type: "image/png",
            },
          ],
          siteName: siteConfig.details.title,
          type: "website",
          locale: "id_ID",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
