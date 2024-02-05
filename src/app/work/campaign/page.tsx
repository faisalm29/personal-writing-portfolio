import { Metadata } from "next";
import Campaigns from "@/components/Campaigns";

export const metadata: Metadata = {
  title: "Campaign",
};

const CampaigsPage = () => {
  return <Campaigns />;
};

export default CampaigsPage;
