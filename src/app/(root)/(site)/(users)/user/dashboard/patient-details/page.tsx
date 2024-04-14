import PatientDetails from "@/components/form/PatientDetails";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { getPatientById } from "@/lib/actions/patient.actions";
import { fetchUser } from "@/lib/actions/user.actions";

const page = async ({}) => {
  const userData = await currentUser();
  if (!userData) return null;

  const user = await fetchUser(userData.id);
  if (!user) {
    return null;
  }
  const patient = await getPatientById(user.role);
  if (!patient) return null;
  return (
    <div>
      <PatientDetails patient={patient} />
    </div>
  );
};

export default page;
