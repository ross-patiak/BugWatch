"use client";
/*eslint-disable*/
import { type ColumnDef, getCoreRowModel } from "@tanstack/react-table";
import { type Ticket } from "@prisma/client";
import { DataTable } from "./tables/DataTable";

type TicketsListProps = {
  data: Ticket[];
  columns: ColumnDef<Ticket>[];
};

const TicketsList = ({ data, columns }: TicketsListProps) => {
  const tableParams = {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  };

  return <DataTable tableParams={tableParams} columns={columns}></DataTable>;
};

export default TicketsList;
