import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { type ApexOptions } from "apexcharts";
import { api } from "@/utils/api";

const CategoryTicketsPieChart = () => {
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

  const dataToChart = [...dataMap.values()];

  const plotOptions: ApexOptions = {
    labels: ["Undefined", "Frontend", "Backend"],
    chart: {
      type: "donut",
    },
    colors: ["#475BE8", "red", "red"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val: string) => {
        return val + "%";
      },
      //   offsetX: -50,
      style: {
        fontSize: "12px",
        colors: ["red"],
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={plotOptions}
        series={dataToChart}
        type="donut"
        width="120px"
      />
    </div>
  );
};

export default CategoryTicketsPieChart;
