// import dynamic from "next/dynamic";
import { Title, BarChart } from "@tremor/react";
import { Card } from "@radix-ui/themes";
import { api } from "@/utils/api";
import CategoryTicketsPieChart from "@/components/ui/custom/analytics/CategoryTicketsPieChart";

const MiddleRowAnalytics = () => {
  const getTicketsByPriority =
    api.ticket.getOpenTicketsGroupedByPriority.useQuery();

  const priorityTicketsData = getTicketsByPriority.data;

  const dataMap = new Map([
    ["low", 0],
    ["medium", 0],
    ["high", 0],
    ["critical", 0],
  ]);

  priorityTicketsData?.forEach((ticket) => {
    const { priority, _count } = ticket;

    dataMap.set(priority, _count.priority);
  });

  const chartdata = [
    {
      name: "Low",
      "Number of Tickets": dataMap.get("low"),
    },
    {
      name: "Medium",
      "Number of Tickets": dataMap.get("medium"),
    },
    {
      name: "High",
      "Number of Tickets": dataMap.get("high"),
    },
    {
      name: "Critical",
      "Number of Tickets": dataMap.get("critical"),
    },
  ];

  return (
    <div className="flex flex-row justify-between">
      <div className="mr-5 basis-[65%]">
        <Card size="2">
          <Title>Tickets By Priority</Title>
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Number of Tickets"]}
            colors={["blue"]}
            yAxisWidth={48}
            allowDecimals={false}
          />
        </Card>
      </div>
      <CategoryTicketsPieChart className="basis-[35%]" />
    </div>
  );
};

export default MiddleRowAnalytics;
