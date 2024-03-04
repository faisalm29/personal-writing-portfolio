import { Metadata } from "next";
import Campaigns from "@/components/Campaigns";

export const metadata: Metadata = {
  title: "Campaign",
  description:
    "Fundraising campaigns for various purposes, from health to education.",
};

const CampaigsPage = () => {
  return <Campaigns />;
};

export default CampaigsPage;
