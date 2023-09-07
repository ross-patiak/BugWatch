import EmployeeDetails from "@/components/ui/custom/users/EmployeeDetails";
import { Button, Heading } from "@radix-ui/themes";
import { Pencil } from "lucide-react";

import { type NextPage } from "next";
import { useRouter } from "next/router";

const UserDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mx-11 my-9 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <Heading size="7">User Details</Heading>
        <Button variant="surface" color="iris">
          <Pencil size={15} />
          Edit
        </Button>
      </div>

      <div className="mx-7">
        {id != null ? <EmployeeDetails employeeId={id as string} /> : null}
      </div>
    </div>
  );
};

export default UserDetailsPage;
