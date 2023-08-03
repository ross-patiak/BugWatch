import CreateTicketButton from "@/components/ui/custom/CreateTicketButton";
import { TicketList } from "@/components/ui/custom/TicketList";
import { api } from "@/utils/api";
import { type Employee } from "@prisma/client";

import { type NextPage } from "next";

const TicketsPage: NextPage = () => {
  const getEmployees = api.employee.getEmployees.useQuery();
  const data: Employee[] = getEmployees.data as Employee[];
  //TODO: make title, content, etc required/optional
  //TODO: add reassign ticket functionality
  return (
    <div className="flex">
      <CreateTicketButton className="self-end" employeeData={data} />
      <TicketList></TicketList>
    </div>
  );
};

export default TicketsPage;
