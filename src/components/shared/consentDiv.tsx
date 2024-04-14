"use client"
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import {
  getAppointmentsOfTheUser,
  verifyConsent,
} from "@/lib/actions/patient.actions";
const ConsentDiv = ({
    consent,
    user,
    index,
}:{
    consent: any,
    user: any,
    index: number
}) => {
  return (
    <div
            key={index}
            className="mt-8 px-6 flex py-2 flex-row gap-4 bg-primary-1 w-max rounded-md items-center"
          >
            <div>
              <h4 className="text-2xl">{consent.patientName}</h4>
              <p>Appointment Type: {consent.appointmentType}</p>
              <p>Date: {consent.date}</p>
            </div>
            <Button
              className=" bg-primary-5 text-white p-2 rounded-lg"
              onClick={async () => {
                const userD = await fetchUser(consent.patient);
                await verifyConsent(userD.role, consent._id, user.mpin);
              }}
            >
              Give Consent
            </Button>
          </div>
  )
}

export default ConsentDiv