import { Metadata } from "next";
import SocialMedia from "@/components/SocialMedia";

export const metadata: Metadata = {
  title: "Social Media",
  description:
    "Social media content that I've written either it's carousel, video, or single image on Instagram or TikTok.",
};

const SocialMediaPage = () => {
  return <SocialMedia />;
};

export default SocialMediaPage;
