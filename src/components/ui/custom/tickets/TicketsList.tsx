"use client";

import { type Ticket } from "@prisma/client";
import { TextField } from "@radix-ui/themes";
import TicketsListEntry from "@/components/ui/custom/tickets/TicketsListEntry";
import { Search } from "lucide-react";

//need to manually recreate usersWithTickets type bc prisma does not include relations by default
// const employeesWithTicketsRelation = Prisma.validator<Prisma.EmployeeArgs>()({
//   include: { tickets: true },
// });

// //exporting type bc ListEntry needs it
// export type employeesWithTicketsType = Prisma.EmployeeGetPayload<
//   typeof employeesWithTicketsRelation
// >;

type TicketsListProps = {
  data: Ticket[];
};

const TicketsList = ({ data }: TicketsListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="self-end">
        <TextField.Root>
          <TextField.Slot>
            <Search size={16} />
          </TextField.Slot>
          <TextField.Input placeholder="Search tickets" />
        </TextField.Root>
      </div>

      <div className="grid grid-cols-4 gap-x-4 gap-y-4">
        {data.map((ticket) => (
          <TicketsListEntry key={ticket?.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsList;
