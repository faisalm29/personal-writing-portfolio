import { Metadata } from "next";
import PressRelease from "@/components/PressRelease";

export const metadata: Metadata = {
  title: "Press Release",
};

const PressReleasePage = () => {
  return <PressRelease />;
};

export default PressReleasePage;
