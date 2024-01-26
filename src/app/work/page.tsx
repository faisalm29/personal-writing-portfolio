import { Metadata } from "next";
import Works from "@/components/Works";

export const metadata: Metadata = {
  title: "Work",
};

const WorkPage = () => {
  return (
    <main className="mx-auto mt-[272px] w-full px-4 md:max-w-[674px] lg:max-w-[960px]">
      <Works />
    </main>
  );
};

export default WorkPage;
