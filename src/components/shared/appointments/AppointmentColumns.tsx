import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppointmentSheet } from "./AppointmentSheet";
import { Appointment } from "@/types/appointment";

export const createAppointmentColumns = (
  openSheetId: string | null,
  setOpenSheetId: (id: string | null) => void
): ColumnDef<Appointment, any>[] => [
  {
    id: "serialNo",
    header: () => <div className="font-semibold text-white text-center">#</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "patient.name",
    header: () => <div className="font-semibold text-white text-center">Name</div>,
    cell: ({ row }) => <div className="text-center">{row.original.patient?.name || "N/A"}</div>,
  },
  {
    accessorKey: "patient.age",
    header: () => <div className="font-semibold text-white text-center">Age</div>,
    cell: ({ row }) => <div className="text-center">{row.original.patient?.age || "N/A"}</div>,
  },
  {
    accessorKey: "patient.gender",
    header: () => <div className="font-semibold text-white text-center">Gender</div>,
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.original.patient?.gender || "N/A"}</div>
    ),
  },
  {
    accessorKey: "date",
    header: () => <div className="font-semibold text-white text-center">Appointment Date</div>,
    cell: ({ row }) => <div className="text-center">{row.original.date}</div>,
  },
  {
    accessorKey: "time",
    header: () => <div className="font-semibold text-white text-center">Appointment Time</div>,
    cell: ({ row }) => <div className="text-center">{row.original.time}</div>,
  },
  {
    accessorKey: "allergies",
    header: () => <div className="font-semibold text-white text-center">Allergies</div>,
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.patient?.patientInfo?.allergies?.length > 0
          ? row.original.patient.patientInfo.allergies.join(", ")
          : "None"}
      </div>
    ),
  },
  {
    accessorKey: "treatmentType",
    header: () => <div className="font-semibold text-white text-center">Treatment Plan</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.treatmentType || "Not specified"}</div>
    ),
  },
  {
    accessorKey: "consent",
    header: () => <div className="font-semibold text-white text-center">Consent Status</div>,
    cell: ({ row }) => (
      <div className="text-center">
        <span
          className={`px-2 py-1 rounded text-sm ${
            row.original.consent
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.original.consent ? "Confirmed" : "Pending"}
        </span>
      </div>
    ),
  },
  {
    id: "details",
    header: () => null,
    cell: ({ row }) => (
      <AppointmentSheet
        appointment={row.original}
        isOpen={openSheetId === row.original._id}
        onOpenChange={(open) => setOpenSheetId(open ? row.original._id : null)}
      />
    ),
  },
  {
    id: "actions",
    header: () => <div className="font-semibold text-white text-center">Consent Form</div>,
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.consent ? (
          <Button
            variant="secondary"
            size="sm"
            disabled
            className="bg-green-800 hover:bg-green-800 text-white cursor-not-allowed"
          >
            Completed
          </Button>
        ) : (
          <Link href={`/admin/consent/${row.original._id}`}>
            <Button variant="destructive" size="sm" className="bg-red-800 hover:bg-red-900">
              Request
            </Button>
          </Link>
        )}
      </div>
    ),
  },
]; 