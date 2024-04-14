import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import {
  getAppointmentsOfTheUser,
  verifyConsent,
} from "@/lib/actions/patient.actions";
import ConsentDiv from "@/components/shared/consentDiv";

const page = async () => {
  const userData = await currentUser();
  if (!userData) return null;

  const user = await fetchUser(userData.id);
  if (!user) {
    return null;
  }

  const patientId = user.role;
  if (!patientId) return null;

  const appointments = await getAppointmentsOfTheUser(user._id);

  return (
    <section className="my-12 mx-8">
      <h3 className="text-3xl">
        Please Provide Consents to the following appointments:
      </h3>

      {appointments.map((consent: any, index: number) => {
        return <ConsentDiv key={index} consent={consent} user={user} index={index} />;
      })}
    </section>
  );
};

export default page;
