import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="flex flex-row flex-wrap items-center justify-between gap-6">
      <Card className="flex grow flex-col rounded-2xl px-[22px] py-6">
        <div>Currently Open</div>
        <div className="flex">
          <div>{numTicketsByStatus("open")}</div>
        </div>
      </Card>

      <Card className="flex grow flex-col rounded-2xl px-[22px] py-6">
        <div>Closed Today</div>
        <div className="flex">
          <div>{numTicketsByStatus("closed")}</div>
        </div>
      </Card>

      <Card className="flex grow flex-col rounded-2xl px-[22px] py-6">
        <div>In Progress</div>
        <div className="flex">
          <div>{numTicketsByStatus("in_progress")}</div>
        </div>
      </Card>

      <Card className="flex grow flex-col rounded-2xl px-[22px] py-6">
        <div>Unassigned</div>
        <div className="flex">
          <div>{numTicketsUnassigned()}</div>
        </div>
      </Card>
    </div>
  );
};

export default TopRowAnalytics;
