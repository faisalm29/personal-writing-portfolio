import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});

const haskoy = localFont({
  src: "./haskoy[wght].woff2",
  display: "swap",
  variable: "--font-haskoy",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Faisal Muhammad",
    default: "Faisal Muhammad - Writing Portfolio",
  },
  description: "Let's write together, for the better.",
  metadataBase: new URL("https://www.faisalm.xyz/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-Us": "/en-US",
      "id-ID": "/id-ID",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${haskoy.variable} ${inter.variable}`}>
        <Navbar />
        <NextTopLoader
          shadow={false}
          color="#313030"
          showSpinner={false}
          height={5}
        />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-R0PHTBEYXJ" />
    </html>
  );
}
