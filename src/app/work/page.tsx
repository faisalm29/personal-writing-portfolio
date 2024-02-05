import { Metadata } from "next";
import Works from "@/components/Works";

export const metadata: Metadata = {
  title: "Work",
};

const WorkPage = () => {
  return <Works />;
};

export default WorkPage;
