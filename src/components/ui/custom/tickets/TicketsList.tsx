"use client";

import { TextField } from "@radix-ui/themes";
import TicketsListEntry from "@/components/ui/custom/tickets/TicketsListEntry";
import { Search } from "lucide-react";
import { type ticketWithEmployeeType } from "@/lib/prismaTypes";

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
