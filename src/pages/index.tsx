import { type NextPage } from "next";
import DashboardCard from "@/components/ui/custom/DashboardCard";
import TopRowAnalytics from "@/components/ui/custom/analytics/TopRowAnalytics";
const Home: NextPage = () => {
  return (
    <div className="mx-6 my-7">
      <TopRowAnalytics />
      <DashboardCard type="property-referrals" />
      <DashboardCard type="top-agents" />
      <DashboardCard type="customer" />
      <DashboardCard type="latest-sales" />
    </div>
  );
};

export default Home;
