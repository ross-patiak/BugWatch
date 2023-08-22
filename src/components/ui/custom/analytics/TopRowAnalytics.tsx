import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";

const numTicketsByStatus = (tstatus: string) => {
  const ticketsByStatus = api.ticket.getTicketsByStatus.useQuery({
    status: tstatus,
  });

  const data: Ticket[] = ticketsByStatus?.data as Ticket[];

  if (tstatus === "closed") {
    const today: string = new Intl.DateTimeFormat("en-US").format(new Date());

    const closedTicketsToday = data?.filter((ticket) => {
      const ticketDate = new Intl.DateTimeFormat("en-US").format(
        ticket.statusUpdatedAt
      );

      return ticketDate === today;
    });

    return closedTicketsToday?.length;
  }

  return data?.length;
};

const numTicketsUnassigned = () => {
  const unassignedTickets = api.ticket.getUnassignedTickets.useQuery();
  const data: Ticket[] = unassignedTickets.data as Ticket[];

  return data?.length;
};

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
          <div>{numTicketsUnassigned()}</div>
        </div>
      </div>
    </div>
  );
};

export default TopRowAnalytics;
