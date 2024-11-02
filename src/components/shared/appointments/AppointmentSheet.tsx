import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Appointment } from "@/types/appointment";

interface AppointmentSheetProps {
  appointment: Appointment;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AppointmentSheet = ({ appointment, isOpen, onOpenChange }: AppointmentSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger data-sheet-trigger />
      <SheetContent className="overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <SheetHeader>
          <SheetTitle>Appointment Details</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4 text-slate-800">
          <div className="grid grid-cols-1 gap-4">
            <PatientSection patient={appointment.patient} />
            <MedicalSection patientInfo={appointment.patient?.patientInfo} />
            <AppointmentSection appointment={appointment} />
            <div className="pt-4">
              <Link href={`/admin/consent/${appointment._id}`}>
                <Button 
                  variant="destructive" 
                  className="w-full bg-red-800 hover:bg-red-900"
                >
                  Request Consent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const PatientSection = ({ patient }: { patient: Appointment['patient'] }) => (
  <>
    <h3 className="font-semibold">Patient Information</h3>
    <div>
      <p>Name: {patient?.name}</p>
      <p>Age: {patient?.age}</p>
      <p>Gender: {patient?.gender}</p>
    </div>
  </>
);

const MedicalSection = ({ patientInfo }: { patientInfo: Appointment['patient']['patientInfo'] }) => (
  <>
    <h3 className="font-semibold">Medical Information</h3>
    <div>
      <p>Blood Group: {patientInfo?.bloodGroup}</p>
      <p>BP: {patientInfo?.bp}</p>
      <p>Allergies: {patientInfo?.allergies?.join(", ") || "None"}</p>
      <p>Medical Conditions: {patientInfo?.medicalConditions?.join(", ") || "None"}</p>
      <p>Medications: {patientInfo?.medications?.join(", ") || "None"}</p>
    </div>
  </>
);

const AppointmentSection = ({ appointment }: { appointment: Appointment }) => (
  <>
    <h3 className="font-semibold">Appointment Details</h3>
    <div>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      <p>Status: {appointment.status}</p>
      <p>Type: {appointment.appointmentType}</p>
      <p>Treatment: {appointment.treatmentType || "Not specified"}</p>
      <p>Consent: {appointment.consent ? "Confirmed" : "Pending"}</p>
    </div>
  </>
); 