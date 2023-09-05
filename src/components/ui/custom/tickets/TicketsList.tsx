"use client";

import { Prisma } from "@prisma/client";
import { TextField } from "@radix-ui/themes";
import TicketsListEntry from "@/components/ui/custom/tickets/TicketsListEntry";
import { Search } from "lucide-react";

//need to manually recreate ticketsWithEmployeeAssigned type bc prisma does not include relations by default
const ticketWithEmployeeRelation = Prisma.validator<Prisma.TicketArgs>()({
  include: { employee: true },
});

//exporting type bc ListEntry needs it
export type ticketWithEmployeeType = Prisma.TicketGetPayload<
  typeof ticketWithEmployeeRelation
>;

type TicketsListProps = {
  data: ticketWithEmployeeType[];
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
