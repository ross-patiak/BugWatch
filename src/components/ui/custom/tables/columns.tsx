"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Employee } from "@prisma/client";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { type Ticket } from "@prisma/client";
import { api } from "@/utils/api";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const employeeListColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "image",
    header: "Picture",
    cell: ({ row }) => {
      return (
        <div className="lowercase">
          <Image
            src={row.getValue("image")}
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "userRole",
    header: "Role",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("userRole")}</div>
    ),
  },
];

// interface FinalTicket extends Ticket {
//   employee: Employee;
// }

export const ticketListColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "employee",
    header: "Name",
    cell: ({ row }) => {
      console.log(row);
      return <div className="lowercase">{row.getValue("employee").name}</div>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("content")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
    cell: ({ row }) => (
      <div className="lowercase">
        {new Date(row.getValue("createdAt")).toString()}
      </div>
    ),
  },
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
];
