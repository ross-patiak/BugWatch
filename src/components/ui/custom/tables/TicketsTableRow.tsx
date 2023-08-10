"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slot } from "@radix-ui/react-slot";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { flexRender, type Row } from "@tanstack/react-table";

type ticketsTableRowProps = {
  row: Row<any>;
};

const TicketsTableRow = ({ row }: ticketsTableRowProps) => {
  return (
    <Dialog key={row.id}>
      <TableRow data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>

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
            <Input id="title" placeholder="Title" className="col-span-3" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketsTableRow;
