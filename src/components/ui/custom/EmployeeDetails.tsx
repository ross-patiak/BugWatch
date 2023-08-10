import { type Employee } from "@prisma/client";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slot } from "@radix-ui/react-slot";

type EmployeeDetailsProps = {
  employee: Employee;
};

const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  console.log(employee);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Ticket</DialogTitle>
        <DialogDescription>{employee?.name}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Title" className="col-span-3" />
        </div>
      </div>
    </DialogContent>
  );
};

export default EmployeeDetails;
