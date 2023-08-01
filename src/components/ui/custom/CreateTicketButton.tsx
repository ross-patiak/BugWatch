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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FormEvent, useRef } from "react";
import { api } from "@/utils/api";

type ButtonProps = {
  className?: string;
};

const CreateTicketButton = ({ className = "" }: ButtonProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const createTicket = api.ticket.create.useMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createTicket.mutate({
      title: titleRef.current?.value as string,
      content: bodyRef.current?.value as string,
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
