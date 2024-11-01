'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAppointmentsByHospital } from '@/lib/actions/appointment.action';
import { fetchUserAndPatientInfo } from '@/lib/actions/user.actions';
import { DataTable } from './DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import MotionDiv from '../animations/MotionDiv';

interface Appointment {
  _id: string;
  patient: {
    _id: string;
    name: string;
    age: number;
    gender: string;
    patientInfo: {
      allergies: string[];
      medicalConditions: string[];
      medications: string[];
      bloodGroup: string;
      bp: string;
    }
  };
  date: string;
  time: string;
  status: string;
  appointmentType: string;
  consent: boolean;
  treatmentType?: string;
}

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const hospitalId = searchParams.get('hospital');

  const fetchPatientInfo = async (appointments: any[]) => {
    const updatedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        try {
          const patientData = await fetchUserAndPatientInfo(appointment.patient);
          console.log(patientData)
          return {
            ...appointment,
            patient: patientData
          };
        } catch (error) {
          console.error(`Error fetching patient info for ID ${appointment.patient}:`, error);
          return appointment;
        }
      })
    );
    return updatedAppointments;
  };

  const columns: ColumnDef<Appointment>[] = [
    {
      id: 'serialNo',
      header: () => <div className="font-semibold text-white text-center">#</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.index + 1}
        </div>
      ),
    },
    {
      accessorKey: 'patient.name',
      header: () => <div className="font-semibold text-white text-center">Name</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.patient?.name || 'N/A'}
        </div>
      ),
    },
    {
      accessorKey: 'patient.age',
      header: () => <div className="font-semibold text-white text-center">Age</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.patient?.age || 'N/A'}
        </div>
      ),
    },
    {
      accessorKey: 'patient.gender',
      header: () => <div className="font-semibold text-white text-center">Gender</div>,
      cell: ({ row }) => (
        <div className="text-center capitalize">
          {row.original.patient?.gender || 'N/A'}
        </div>
      ),
    },
    {
      accessorKey: 'date',
      header: () => <div className="font-semibold text-white text-center">Appointment Date</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.date}
        </div>
      ),
    },
    {
      accessorKey: 'time',
      header: () => <div className="font-semibold text-white text-center">Appointment Time</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.time}
        </div>
      ),
    },
    {
      accessorKey: 'allergies',
      header: () => <div className="font-semibold text-white text-center">Allergies</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.patient?.patientInfo?.allergies?.length > 0
            ? row.original.patient.patientInfo.allergies.join(', ')
            : 'None'}
        </div>
      ),
    },
    {
      accessorKey: 'treatmentType',
      header: () => <div className="font-semibold text-white text-center">Treatment Plan</div>,
      cell: ({ row }) => (
        <div className="text-center">
          {row.original.treatmentType || 'Not specified'}
        </div>
      ),
    },
    {
      accessorKey: 'consent',
      header: () => <div className="font-semibold text-white text-center">Consent Status</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span className={`px-2 py-1 rounded text-sm ${
            row.original.consent ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {row.original.consent ? 'Confirmed' : 'Pending'}
          </span>
        </div>
      ),
    },
    {
      id: 'actions',
      header: () => <div className="font-semibold text-white text-center">Consent Form</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <Button 
            variant="destructive" 
            size="sm"
            className="bg-red-800 hover:bg-red-900"
          >
            Request
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const appointmentsData = await getAppointmentsByHospital(hospitalId || '');
        const appointmentsWithPatientInfo = await fetchPatientInfo(appointmentsData);
        setAppointments(appointmentsWithPatientInfo);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [hospitalId]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DataTable
        columns={columns}
        data={appointments}
        title="Appointments"
        tableHeadClassName="bg-red-500"
      />
    </MotionDiv>
  );
};

export default AppointmentsTable;