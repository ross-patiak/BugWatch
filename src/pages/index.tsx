import { type NextPage } from "next";
import TopRowAnalytics from "@/components/ui/custom/analytics/TopRowAnalytics";
import MiddleRowAnalytics from "@/components/ui/custom/analytics/MiddleRowAnalytics";
import { Flex, Heading } from "@radix-ui/themes";

const Home: NextPage = () => {
  return (
    <div className="mx-6 my-7">
      <Heading className="pb-5">Dashboard</Heading>
      <Flex gap="5" direction="column">
        <TopRowAnalytics />
        <MiddleRowAnalytics />
      </Flex>

      {/* <DashboardCard type="property-referrals" />
      <DashboardCard type="top-agents" />
      <DashboardCard type="customer" />
      <DashboardCard type="latest-sales" /> */}
    </div>
  );
};

export default Home;
