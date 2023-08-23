import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { type ApexOptions } from "apexcharts";
import { api } from "@/utils/api";
import CategoryTicketsPieChart from "@/components/ui/custom/analytics/CategoryTicketsPieChart";

// yaxis: {
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//     labels: {
//       show: false,
//       formatter: (val: string) => {
//         return val + "%";
//       },
//     },
//   },

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

  const dataToChart = [...dataMap.values()];

  const plotOptions: ApexOptions = {
    chart: {
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: string) => {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["red"],
      },
    },

    xaxis: {
      categories: ["Low", "Medium", "High", "Critical"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "orange",
            colorTo: "green",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    title: {
      text: "Tickets By Priority",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "green",
      },
    },
  };

  const tmp = {
    series: [
      {
        name: "Inflation",
        data: dataToChart,
      },
    ],
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="mr-5 basis-[65%]">
        <ReactApexChart
          options={plotOptions}
          series={tmp.series}
          type="bar"
          height={350}
        />
      </div>

      <CategoryTicketsPieChart className="basis-[35%]" />
    </div>
  );
};

export default MiddleRowAnalytics;
