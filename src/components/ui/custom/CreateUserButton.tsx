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
import { Button as RadixButton } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { type FormEvent, useRef, useState } from "react";
import { api } from "@/utils/api";

type ButtonProps = {
  className?: string;
};

const getImage = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  return data?.results[0].picture.large;
};

const CreateUserButton = ({ className = "" }: ButtonProps) => {
  const [role, setRole] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const createUser = api.employee.create.useMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const image = await getImage();

    createUser.mutate({
      name: nameRef.current?.value as string,
      email: emailRef.current?.value as string,
      userRole: role,
      image: image,
    });

    //reset role
    setRole("");
  };

  //TODO: make title, content, etc required/optional
  return (
    <div className={`flex-end ${className}`}>
      <Dialog>
        <DialogTrigger asChild>
          <RadixButton variant="soft" size="2">
            +Add User
          </RadixButton>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription>
              Enter user details here. Click create when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                ref={nameRef}
                placeholder="Name"
                className="col-span-3"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                ref={emailRef}
                placeholder="Email"
                className="col-span-3"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={(val: string) => setRole(val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select user role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Developer">Developer</SelectItem>
                    <SelectItem value="Project Manager">
                      Project Manager
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            {/* eslint-disable-next-line */}
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

export default CreateUserButton;
