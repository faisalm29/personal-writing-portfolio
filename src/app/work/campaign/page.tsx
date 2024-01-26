import { Metadata } from "next";
import Campaigns from "@/components/Campaigns";

export const metadata: Metadata = {
  title: "Campaign",
};

const CampaigsPage = () => {
  return (
    <main className="mx-auto mb-48 mt-[272px] w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <Campaigns />
    </main>
  );
};

export default CampaigsPage;
