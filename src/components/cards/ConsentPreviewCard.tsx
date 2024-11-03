import { getAppointmentById } from "@/lib/actions/appointment.action";
import { getDoctorById } from "@/lib/actions/doctor.actions";
import { fetchUserAndPatientInfo } from "@/lib/actions/user.actions";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConsentCard from "./ConsentCard";

const ConsentPreviewCard = async ({
  appointmentId,
  userId,
}: {
  appointmentId: string;
  userId: string;
}) => {
  const appointment = await getAppointmentById(appointmentId);
  const doctor = await getDoctorById(appointment.consultingDoctor);
  const patient = await fetchUserAndPatientInfo(appointment.patient);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Consent Required</h3>
              <p className="text-sm text-gray-600">For: {patient.name}</p>
              <div className="text-sm text-gray-600">
                <p>Dr. {doctor.name}</p>
                <p>{appointment.treatmentType}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <span className="text-sm text-gray-500">
                {format(new Date(appointment.date), "MMM d, yyyy")}
              </span>
              <span className="text-blue-600 text-sm hover:underline mt-auto">
                View Details →
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <ConsentCard appointmentId={appointmentId} userId={userId} />
      </DialogContent>
    </Dialog>
  );
};

export default ConsentPreviewCard;
