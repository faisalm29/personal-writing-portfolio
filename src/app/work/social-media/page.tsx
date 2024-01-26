import { Metadata } from "next";
import SocialMedias from "@/components/SocialMedias";

export const metadata: Metadata = {
  title: "Social Media",
};

const SocialMediasPage = () => {
  return (
    <main className="mx-auto mt-[272px] w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <SocialMedias />
    </main>
  );
};

export default SocialMediasPage;
