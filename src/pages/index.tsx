import { type NextPage } from "next";
import DashboardCharts from "@/components/ui/custom/DashboardCharts";
import DashboardCard from "@/components/ui/custom/DashboardCard";

const Home: NextPage = () => {
  return (
    <div className="mx-6 my-7">
      <DashboardCharts />
      <DashboardCard type="property-referrals" />
      <DashboardCard type="top-agents" />
      <DashboardCard type="customer" />
      <DashboardCard type="latest-sales" />
    </div>
  );
};

export default Home;
