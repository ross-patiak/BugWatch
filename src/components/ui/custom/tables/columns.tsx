"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Employee, type Ticket } from "@prisma/client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const employeeListColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      return (
        <div>
          <Image
            src={row.getValue("image")}
            width={50}
            height={50}
            alt="Profile pic of this user"
            priority={true}
          ></Image>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
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
          <Image
            src={employee.image as string}
            width={50}
            height={50}
            alt="Profile pic of this user"
            priority={true}
          ></Image>
          <div>{employee.name}</div>
        </div>
      );
    },
  },
];
