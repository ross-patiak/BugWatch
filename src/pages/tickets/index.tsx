import CreateTicketButton from "@/components/ui/custom/CreateTicketButton";
import TicketsList from "@/components/ui/custom/TicketList";
import { api } from "@/utils/api";
import { type Ticket } from "@prisma/client";
import { ticketListColumns } from "@/components/ui/custom/tables/columns";
import { type Employee } from "@prisma/client";

import { type NextPage } from "next";

interface Ticket2 extends Ticket {
  employee: Employee;
}

const TicketsPage: NextPage = () => {
  const getTickets = api.ticket.getTickets.useQuery();
  const data: Ticket2[] = getTickets.data as Ticket2[];
  const getEmployees = api.employee.getEmployees.useQuery();
  const edata: Employee[] = getEmployees.data as Employee[];
  //TODO: make title, content, etc required/optional
  //TODO: add reassign ticket functionality
  return (
    <div className="flex">
      <CreateTicketButton className="self-end" employeeData={edata} />
      {data ? (
        <TicketsList data={data} columns={ticketListColumns}></TicketsList>
      ) : null}
    </div>
  );
};

export default TicketsPage;
