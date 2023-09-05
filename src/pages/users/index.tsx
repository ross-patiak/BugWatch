import CreateUserButton from "@/components/ui/custom/CreateUserButton";
import EmployeesList from "@/components/ui/custom/users/EmployeesList";
import { api } from "@/utils/api";
import { Heading } from "@radix-ui/themes";

import { type NextPage } from "next";

const UsersPage: NextPage = () => {
  const getEmployees = api.employee.getEmployees.useQuery();
  const { data } = getEmployees;

  return (
    <div className="mx-7 my-7 flex-col">
      <div className="flex items-center justify-between pb-5">
        <Heading>Users List</Heading>
        <CreateUserButton employeesQuery={getEmployees} />
      </div>
      {data ? <EmployeesList data={data} /> : null}
    </div>
  );
};

export default UsersPage;
