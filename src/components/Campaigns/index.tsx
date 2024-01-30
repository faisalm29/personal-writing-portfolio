import CampaignCard from "@/components/Campaigns/CampaignCard";
import campaigns from "@/contents/campaigns.json";

const Campaigns = async () => {
  return (
    <section>
      <h1 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
        Fundraising Campaign
      </h1>
      <div className="grid gap-y-12 md:grid-cols-8 md:gap-x-6 md:gap-y-16 lg:grid-cols-12 lg:gap-x-6">
        {campaigns.map((campaign, id) => (
          <CampaignCard key={id} campaign={campaign} />
        ))}
      </div>
    </section>
  );
};

export default Campaigns;
