"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Employee, type Ticket } from "@prisma/client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DialogTrigger } from "@radix-ui/react-dialog";

export const employeeListColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { id, image, name } = row.original;

      return (
        <div className="flex">
          <Avatar>
            <AvatarImage src={image as string} alt="Profile pic of this user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link href={`/users/${id}`}>{name}</Link>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "userRole",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("userRole")}</div>,
  },
  {
    header: " ",
    cell: () => <DialogTrigger>View Details</DialogTrigger>,
  },
];

export const ticketListColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "title",
    header: "Ticket",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Created date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(date);

      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "employee",
    header: "Assigned To",
    cell: ({ row }) => {
      const employee: Employee = row.getValue("employee");
      return (
        <div className="flex">
          <Avatar>
            <AvatarImage
              src={employee?.image as string}
              alt="Profile pic of this user"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>{employee?.name}</div>
        </div>
      );
    },
  },
  {
    header: " ",
    cell: () => <DialogTrigger>View Details</DialogTrigger>,
  },
];
