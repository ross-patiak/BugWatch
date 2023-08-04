"use client";
import { type ColumnDef, getCoreRowModel } from "@tanstack/react-table";

import { type Employee } from "@prisma/client";
import { DataTable } from "./tables/DataTable";
//type to check against the columns
type EmployeesListProps = {
  data: Employee[];
  columns: ColumnDef<Employee>[];
};

//show table
const EmployeesList = ({ data, columns }: EmployeesListProps) => {
  const tableParams = {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  };

  return <DataTable tableParams={tableParams} columns={columns}></DataTable>;
};

export default EmployeesList;
