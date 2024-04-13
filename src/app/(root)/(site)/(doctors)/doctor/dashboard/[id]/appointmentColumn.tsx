"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const appointmentColumn: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
      },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Assigned Doctor",
  },
  {
    accessorKey: "amount",
    header: "Disease",
  },
  {
    accessorKey: "amount",
    header: "Actions",
  },
];
