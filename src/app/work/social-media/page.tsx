import { Metadata } from "next";
import SocialMedia from "@/components/SocialMedia";

export const metadata: Metadata = {
  title: "Social Media",
};

const SocialMediaPage = () => {
  return (
    <main className="mx-auto mt-[272px] w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <SocialMedia />
    </main>
  );
};

export default SocialMediaPage;
