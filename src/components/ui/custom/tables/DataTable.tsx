"use client";

import {
  type ColumnDef,
  flexRender,
  useReactTable,
  type TableOptions,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmployeesTableRow from "@/components/ui/custom/tables/EmployeesTableRow";
import TicketsTableRow from "@/components/ui/custom/tables/TicketsTableRow";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  tableParams: TableOptions<TData>;
  type: "tickets" | "users";
}

export function DataTable<TData, TValue>({
  columns,
  tableParams,
  type,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable(tableParams);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.map((row) =>
                type === "users" ? (
                  <EmployeesTableRow key={row.id} row={row} />
                ) : (
                  <TicketsTableRow key={row.id} row={row} />
                )
              )
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
