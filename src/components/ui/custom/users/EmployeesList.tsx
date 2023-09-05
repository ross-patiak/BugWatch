"use client";

import { Prisma } from "@prisma/client";
import { TextField } from "@radix-ui/themes";
import EmployeesListEntry from "@/components/ui/custom/users/EmployeesListEntry";
import { Search } from "lucide-react";

//need to manually recreate usersWithTickets type bc prisma does not include relations by default
const employeesWithTicketsRelation = Prisma.validator<Prisma.EmployeeArgs>()({
  include: { tickets: true },
});

//exporting type bc ListEntry needs it
export type employeesWithTicketsType = Prisma.EmployeeGetPayload<
  typeof employeesWithTicketsRelation
>;

type EmployeesListProps = {
  data: employeesWithTicketsType[];
};

const EmployeesList = ({ data }: EmployeesListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="self-end">
        <TextField.Root>
          <TextField.Slot>
            <Search size={16} />
          </TextField.Slot>
          <TextField.Input placeholder="Search users" />
        </TextField.Root>
      </div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {data.map((employee) => (
          <EmployeesListEntry key={employee?.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
