//import dynamic from "next/dynamic";

import { Title, DonutChart } from "@tremor/react";
import { api } from "@/utils/api";
import { Card } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

type PieChartProps = {
  className?: string;
};

const CategoryTicketsPieChart = ({ className }: PieChartProps) => {
  const getTicketsByCategory =
    api.ticket.getOpenTicketsGroupedByCategory.useQuery();
  const categoryTicketsData = getTicketsByCategory.data;

  const dataMap = new Map([
    ["undefined", 0],
    ["frontend", 0],
    ["backend", 0],
  ]);

  categoryTicketsData?.forEach((ticket) => {
    const { _count, category } = ticket;

    dataMap.set(category as string, _count.category);
  });

  const data = [
    {
      name: "Undefined",
      count: dataMap.get("undefined"),
    },
    {
      name: "Frontend",
      count: dataMap.get("frontend"),
    },
    {
      name: "Backend",
      count: dataMap.get("backend"),
    },
  ];

  return (
    <Card size="2" className={cn(className, "flex")}>
      <Title>Open Tickets By Category</Title>
      <DonutChart
        className="mt-6"
        data={data}
        category="count"
        index="name"
        colors={["slate", "violet", "indigo"]}
        variant="pie"
      />
    </Card>
  );
};

export default CategoryTicketsPieChart;
