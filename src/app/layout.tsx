import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  description: "Writing portfolio",
  metadataBase: new URL("https://personal-writing-portfolio.vercel.app"),
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
