import { Metadata } from "next";
import PressRelease from "@/components/PressRelease";

export const metadata: Metadata = {
  title: "Press Release",
  description:
    "Records of achievements and activities from the company where I work which have been published in online media.",
};

const PressReleasePage = () => {
  return <PressRelease />;
};

export default PressReleasePage;
