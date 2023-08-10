import dynamic from "next/dynamic";
import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const plotOptions: ApexPlotOptions = {
  pie: {
    donut: {
      size: "40%",
    },
  },
};

const numTicketsByStatus = (tstatus: string) => {
  const openStatusCount = api.ticket.getTicketsByStatus.useQuery({
    status: tstatus,
  });
  const data: Ticket[] = openStatusCount.data as Ticket[];

  const today: string = new Date().toLocaleDateString();

  if (tstatus == "closed") {
    let counter = 0;
    for (let i = 0; i < data?.length; i++) {
      if (data[i]?.statusUpdatedAt == today) {
        counter++;
      }
    }
    return counter;
  } else {
    return data?.length;
  }
};

const numTicketsByEmployee = (employeeId: string) => {
  const numTicketsByEmployee = api.ticket.getTicketsByEmployee.useQuery({
    employee: employeeId,
  });
  const data: Ticket[] = numTicketsByEmployee.data as Ticket[];
  return data?.length;
};

// const numTicketsClosedToday = () => {
//   const numTicketClosedToday
// }
const TopRowAnalytics = () => {
  return (
    <div className="flex-rpw flex flex-wrap items-center justify-between gap-6">
      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Currently Open</div>
        <div className="flex">
          <div>{numTicketsByStatus("open")}</div>

          {/* 
          <ReactApexChart
            options={{
              plotOptions,
              chart: { type: "donut" },
              colors: ["#475BE8", "#272B30"],
              legend: { show: false },
              dataLabels: { enabled: false },
              stroke: {
                colors: ["transparent"],
              },
            }}
            series={[75, 25]}
            type="donut"
            width="120px"
          /> 
          */}
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Closed Today</div>
        <div className="flex">
          <div>{numTicketsByStatus("closed")}</div>
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">In Progress</div>
        <div className="flex">
          <div>{numTicketsByStatus("in_progress")}</div>
        </div>
      </div>

      <div className="flex grow flex-col rounded-2xl bg-[#1A1D1F] px-[22px] py-6">
        <div className="text-[#6F767E]">Unassigned</div>
        <div className="flex">
          <div>{numTicketsByEmployee("")}</div>
        </div>
      </div>
    </div>
  );
};

export default TopRowAnalytics;
