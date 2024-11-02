'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAppointmentsByHospital } from "@/lib/actions/appointment.action";
import { fetchUserAndPatientInfo } from "@/lib/actions/user.actions";
import { DataTable } from "../DataTable";
import MotionDiv from "@/components/animations/MotionDiv";
import { createAppointmentColumns } from "./AppointmentColumns";
import { Appointment } from "@/types/appointment";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSheetId, setOpenSheetId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const hospitalId = searchParams.get("hospital");

  const fetchPatientInfo = async (appointments: any[]) => {
    const updatedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        try {
          const patientData = await fetchUserAndPatientInfo(appointment.patient);
          return { ...appointment, patient: patientData };
        } catch (error) {
          console.error(`Error fetching patient info for ID ${appointment.patient}:`, error);
          return appointment;
        }
      })
    );
    return updatedAppointments;
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const appointmentsData = await getAppointmentsByHospital(hospitalId || "");
        const appointmentsWithPatientInfo = await fetchPatientInfo(appointmentsData);
        setAppointments(appointmentsWithPatientInfo);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [hospitalId]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  const columns = createAppointmentColumns(openSheetId, setOpenSheetId);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DataTable<Appointment, any>
        columns={columns}
        data={appointments}
        title="Appointments"
        tableHeadClassName="bg-red-500"
        onRowClick={(row) => {
          const target = event?.target as HTMLElement;
          if (target.closest('a')) return;
          
          const appointmentId = row.getAttribute('data-appointment-id');
          if (appointmentId) {
            setOpenSheetId(openSheetId === appointmentId ? null : appointmentId);
          }
        }}
      />
    </MotionDiv>
  );
};

export default AppointmentsTable; 