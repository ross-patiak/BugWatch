import { type NextPage } from "next";
import DashboardCard from "@/components/ui/custom/DashboardCard";
import TopRowAnalytics from "@/components/ui/custom/analytics/TopRowAnalytics";
import MiddleRowAnalytics from "@/components/ui/custom/analytics/MiddleRowAnalytics";
const Home: NextPage = () => {
  return (
    <div className="mx-6 my-7">
      <TopRowAnalytics />
      <MiddleRowAnalytics />
      {/* <DashboardCard type="property-referrals" />
      <DashboardCard type="top-agents" />
      <DashboardCard type="customer" />
      <DashboardCard type="latest-sales" /> */}
    </div>
  );
};

export default Home;
