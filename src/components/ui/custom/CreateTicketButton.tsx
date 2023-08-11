import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FormEvent, useRef, useState } from "react";
import { api } from "@/utils/api";
import { type Employee } from "@prisma/client";

type ButtonProps = {
  className?: string;
  employeeData: Employee[];
};

const CreateTicketButton = ({ className = "", employeeData }: ButtonProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [employee, setEmployee] = useState("");
  const [status, setStatus] = useState("open");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("");

  const createTicket = api.ticket.create.useMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTicket.mutate({
      title: titleRef.current?.value as string,
      content: bodyRef.current?.value as string,
      employeeId: employee,
      status: status,
      priority: priority,
      category: category,
    });
  };

  //TODO: make title, content, etc required/optional
  return (
    <div className={`flex-end ${className}`}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create Ticket</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Ticket</DialogTitle>
            <DialogDescription>
              Enter ticket details here. Click create when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                ref={titleRef}
                placeholder="Title"
                className="col-span-3"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Enter details here"
                id="description"
                ref={bodyRef}
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="role">Assign To</Label>
              <Select onValueChange={(val: string) => setEmployee(val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {employeeData?.length > 0 ? (
                      employeeData?.map((employee: Employee) => (
                        //link by ID; explain {} v () in arrow funcs
                        <SelectItem key={employee.id} value={employee.id}>
                          {employee.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="NO_USERS">No users found</SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="role">Status</Label>
              <Select
                defaultValue={"open"}
                onValueChange={(val: string) => setStatus(val)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="role">Priority</Label>
              <Select
                defaultValue={"low"}
                onValueChange={(val: string) => setPriority(val)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="role">Category</Label>
              <Select onValueChange={(val: string) => setCategory(val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="N/A" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <form onSubmit={handleSubmit}>
              <DialogClose asChild>
                <Button type="submit">Create</Button>
              </DialogClose>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTicketButton;
