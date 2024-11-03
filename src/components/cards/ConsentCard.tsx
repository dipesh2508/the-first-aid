import { getAppointmentById } from '@/lib/actions/appointment.action';
import { getDoctorById } from '@/lib/actions/doctor.actions';
import { getHospitalById } from '@/lib/actions/hospital.actions';
import { fetchUserAndPatientInfo } from '@/lib/actions/user.actions';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConsentSubmissionForm from '@/components/forms/ConsentSubmissionForm';
import { useRouter } from 'next/navigation';

const ConsentCard = async ({ appointmentId, userId }: { appointmentId: string; userId: string }) => {
  const appointment = await getAppointmentById(appointmentId);
  const doctor = await getDoctorById(appointment.consultingDoctor);
  const hospital = await getHospitalById(appointment.hospital);
  const patient = await fetchUserAndPatientInfo(appointment.patient);

  if (!patient || !hospital || !doctor) {
    return <div>Error fetching details</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Medical Consent Form</h2>
        <p className="text-gray-500">Date: {format(new Date(appointment.date), 'PPP')}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="font-semibold text-gray-700">Patient Details</h3>
          <p>Name: {patient.name}</p>
          <p>Age: {patient.age}</p>
          <p>Blood Group: {patient.patientInfo.bloodGroup}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Doctor Details</h3>
          <p>Dr. {doctor.name}</p>
          <p>Reg ID: {doctor.regId}</p>
          <p>{hospital.name}</p>
        </div>
      </div>

      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        <div>
          <h3 className="font-semibold text-gray-700">Treatment Details</h3>
          <p className="text-gray-600">{appointment.treatmentType}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Surgery Type</h3>
          <p className="text-gray-600">{appointment.surgeryType}</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-600">Risks Involved</h3>
          <p className="text-gray-600">{appointment.riskInvolved}</p>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>By providing consent, you acknowledge that you understand the procedure, its risks, and potential outcomes.</p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-6">
            Provide Consent
          </Button>
        </DialogTrigger>
        <DialogContent>
          <ConsentSubmissionForm 
            userId={userId} 
            appointmentId={appointmentId}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsentCard;
