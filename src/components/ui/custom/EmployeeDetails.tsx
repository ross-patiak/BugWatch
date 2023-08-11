import { type Employee } from "@prisma/client";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Ticket } from "@prisma/client";
import { DataTable } from "@/components/ui/custom/tables/DataTable";
import { api } from "@/utils/api";
import { getCoreRowModel } from "@tanstack/react-table";
import { assignedTicketsColumns } from "@/components/ui/custom/tables/columns";

type EmployeeDetailsProps = {
  employee: Employee;
};

const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  const { id, name, email, image, userRole } = employee;
  const employeeInfo = api.employee.getEmployee.useQuery({
    employeeId: id,
  });

  const assignedTickets: Ticket[] = employeeInfo?.data?.tickets as Ticket[];

  const tableParams = {
    data: assignedTickets,
    columns: assignedTicketsColumns,
    getCoreRowModel: getCoreRowModel(),
  };

  return (
    <DialogContent className="flex min-h-[80vh] min-w-[60vh] flex-col sm:max-w-[425px]">
      <DialogHeader className="flex">
        <DialogTitle className="self-center">User Details</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col">
        {/** top part */}
        <div className="flex grow flex-row justify-between pb-3">
          <div className="flex flex-row">
            <>
              <Avatar>
                <AvatarImage
                  src={image as string}
                  alt="Profile pic of this user"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </>
            <div className="mb-5 flex flex-col">
              <div className="mb-3">
                <div>{name}</div>
                <div>{userRole}</div>
              </div>

              <div>email: {email}</div>
            </div>
          </div>
          <div>Edit</div>
        </div>

        {/** bottom part */}
        <div className="flex grow flex-col">
          <div className="pb-4">Assigned Tickets</div>
          {assignedTickets ? (
            <DataTable
              tableParams={tableParams}
              columns={assignedTicketsColumns}
              type="tickets"
            ></DataTable>
          ) : null}
        </div>
      </div>
    </DialogContent>
  );
};

export default EmployeeDetails;
