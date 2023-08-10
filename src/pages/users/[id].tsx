import { api } from "@/utils/api";
import { type Employee } from "@prisma/client";

import { type NextPage } from "next";
import { useRouter } from "next/router";

const UserDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const getEmployee = api.employee?.getEmployee?.useQuery({
    employeeId: id as string,
  });
  const data: Employee = getEmployee?.data as Employee;

  return <div>Hi</div>;
};

export default UserDetailsPage;
