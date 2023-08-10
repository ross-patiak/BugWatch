"use client";

import { TableCell, TableRow } from "@/components/ui/table";

import { Dialog } from "@/components/ui/dialog";
import { flexRender, type Row } from "@tanstack/react-table";
import EmployeeDetails from "@/components/ui/custom/EmployeeDetails";

type employeesTableRowProps = {
  row: Row<any>;
};

const EmployeesTableRow = ({ row }: employeesTableRowProps) => {
  const employee = row.original;

  return (
    <Dialog key={row.id}>
      <TableRow data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>

      <EmployeeDetails employee={employee} />
    </Dialog>
  );
};

export default EmployeesTableRow;
