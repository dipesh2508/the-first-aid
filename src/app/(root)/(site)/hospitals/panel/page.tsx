"use client";
import {
  Stethoscope,
  Link,
  Users,
  ClipboardList,
  Eye,
  CheckCircle,
  Trash,
} from "lucide-react";
import DataCard from "../_dashboardComponents/DataCard";
import { DataTable } from "@/components/shared/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/ConfirmModal";
import { ReuseableModal } from "@/components/ReuseableModal";
import { Input } from "postcss";
import Hint from "@/components/Hint";
import UpdateAppointmentForm from "@/components/forms/UpdateAppointmentForm";
type AppointmentData = {
  id: string;
  patient: string; // Assuming ObjectId as a string
  doctor: string; // Assuming ObjectId as a string
  hospital: string; // Assuming ObjectId as a string
  date: string;
  time: string;
  disease: string;
  status: "pending" | "approved" | "rejected";
  appointmentType: "emergency" | "normal";
  emergencyType?: "accident" | "heart attack" | "stroke" | "others";
};
export default function HospitalsDashboardPage() {
  const appointments: AppointmentData[] = [
    {
      id: "12345abc",
      patient: "Ramesh Kumar",
      doctor: "Dr. Ashok Singh",
      hospital: "Apollo Hospital",
      date: "2024-09-20",
      time: "10:00 AM",
      status: "pending",
      appointmentType: "normal",
      disease: "Diabetes",
    },
    {
      id: "67890def",
      patient: "Sita Devi",
      doctor: "Dr. Shyam Prasad",
      hospital: "City Hospital",
      date: "2024-09-21",
      time: "2:30 PM",
      status: "approved",
      appointmentType: "emergency",
      emergencyType: "heart attack",
      disease: "Heart Disease",
    },
    {
      id: "11223ghi",
      patient: "Ravi Patel",
      doctor: "Dr. Deepak Roy",
      hospital: "Fortis Hospital",
      date: "2024-09-22",
      time: "11:00 AM",
      status: "rejected",
      appointmentType: "normal",
      disease: "Asthma",
    },
    {
      id: "78901jkl",
      patient: "Meera Sharma",
      doctor: "Dr. Aditi Verma",
      hospital: "Max Healthcare",
      date: "2024-09-23",
      time: "3:15 PM",
      status: "pending",
      appointmentType: "emergency",
      emergencyType: "accident",
      disease: "Fracture",
    },
    {
      id: "34567mno",
      patient: "Arun Mehta",
      doctor: "Dr. Rajesh Nair",
      hospital: "Medanta Hospital",
      date: "2024-09-24",
      time: "9:45 AM",
      status: "approved",
      appointmentType: "normal",
      disease: "Hypertension",
    },
  ];

  const columns: ColumnDef<AppointmentData>[] = [
    {
      accessorKey: "patient",
      header: "Patient ID",
    },
    {
      accessorKey: "doctor",
      header: "Doctor ID",
      cell: ({ row }) => {
        return <p className="text-primary-5">{row.original.doctor}</p>;
      },
    },

    {
      accessorKey: "date",
      header: "Date",
    },

    {
      accessorKey: "disease",
      header: "Disease",
      cell: ({ row }) => {
        return (
          <div className="text-white text-center rounded bg-[#FF706F]">
            {row.original.disease}
          </div>
        );
      },
    },
    {
      accessorKey: "id",
      header: "Action",
      cell: ({ row }) => {
        return (
          <div>
            <ReuseableModal title="Edit Appointment">
              <UpdateAppointmentForm
                appointmentId="123456789"
                currentTime="14:30"
                currentStatus="pending"
              />
            </ReuseableModal>
            <ConfirmModal
              header="Are you sure you want to delete this appointment?"
              onConfirm={() => {
                console.log("Appointment deleted");
              }}
              description="This action cannot be undone."
            >
              <Hint align="center" side="bottom" label="Delete">
                <Button
                  variant="ghost"
                  className="hover:text-red-500 "
                  size="icon"
                >
                  <Trash />
                </Button>
              </Hint>
            </ConfirmModal>
          </div>
        );
      },
    },
  ];
  const recentPatientsColumns: ColumnDef<AppointmentData>[] = [
    {
      accessorKey: "patient",
      header: "Patient ID",
    },
    {
      accessorKey: "doctor",
      header: "Doctor ID",
      cell: ({ row }) => {
        return <p className="text-primary-5">{row.original.doctor}</p>;
      },
    },

    {
      accessorKey: "date",
      header: "Date",
    },

    {
      accessorKey: "disease",
      header: "Disease",
      cell: ({ row }) => {
        return (
          <div className="text-white text-center rounded bg-[#FF706F]">
            {row.original.disease}
          </div>
        );
      },
    },
  ];
  return (
    <div className="p-4 mx-auto  w-full space-y-4">
      <h1 className="text-2xl mx-auto text-start  w-full max-w-screen-lg text-black font-bold">
        Dashboard
      </h1>
      <div className="grid grid-cols-1  mx-auto  w-full max-w-screen-lg md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DataCard value={45} label="Patients" icon={ClipboardList} />
        <DataCard value={32} label="Consultations" icon={Stethoscope} />
        <DataCard value={16} label="Operations" icon={Link} />
        <DataCard value={50} label="Visitor" icon={Users} />
      </div>
      <div className="grid grid-cols-1  mx-auto  w-full  md:grid-cols-2  gap-4">
        <DataTable title="Appointments" data={appointments} columns={columns} />
        <DataTable
          title="Recent Patients"
          data={appointments}
          columns={recentPatientsColumns}
        />
      </div>
    </div>
  );
}
