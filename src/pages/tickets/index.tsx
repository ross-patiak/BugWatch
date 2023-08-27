import CreateTicketButton from "@/components/ui/custom/CreateTicketButton";
import TicketsList from "@/components/ui/custom/TicketList";
import { api } from "@/utils/api";
import { type Ticket, type Employee } from "@prisma/client";
import { ticketListColumns } from "@/components/ui/custom/tables/columns";

import { type NextPage } from "next";

const TicketsPage: NextPage = () => {
  const getTickets = api.ticket.getTickets.useQuery();
  const ticketData: Ticket[] = getTickets.data as Ticket[];
  const getEmployees = api.employee.getEmployees.useQuery();
  const employeeData: Employee[] = getEmployees.data as Employee[];
  //TODO: make title, content, etc required/optional
  //TODO: add reassign ticket functionality
  return (
    <div className="flex">
      <CreateTicketButton
        className="self-end"
        employeeData={employeeData}
        ticketsQuery={getTickets}
      />
      {ticketData ? (
        <TicketsList
          data={ticketData}
          columns={ticketListColumns}
        ></TicketsList>
      ) : null}
    </div>
  );
};

export default TicketsPage;
