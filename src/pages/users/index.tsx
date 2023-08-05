import CreateUserButton from "@/components/ui/custom/CreateUserButton";
import EmployeesList from "@/components/ui/custom/EmployeesList";
import { employeeListColumns } from "@/components/ui/custom/tables/columns";
import { api } from "@/utils/api";
import { type Employee } from "@prisma/client";

import { type NextPage } from "next";

const UsersPage: NextPage = () => {
  const getEmployees = api.employee.getEmployees.useQuery();
  const data: Employee[] = getEmployees.data as Employee[];

  return (
    <div className="flex">
      <CreateUserButton className="self-end" />
      {data ? (
        <EmployeesList data={data} columns={employeeListColumns} />
      ) : null}
    </div>
  );
};

export default UsersPage;
