"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  name: string;
  age: number;
  gender: string;
  condition: string;
  admitted: boolean;
  roomNumber: any;
};

export const appointmentColumn: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "admitted",
    header: "Admitted",
  },
  {
    accessorKey: "roomNumber",
    header: "Room Number",
  },
];
