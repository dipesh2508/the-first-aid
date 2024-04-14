import AccountProfile from '@/components/form/AccountProfile'
import { getPatientById } from '@/lib/actions/patient.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import PatientDetails from "@/components/form/PatientDetails";

const page = async () => {

  const userData = await currentUser();
  if(!userData) return null;

  const user = await fetchUser(userData.id); 
  if(!user) return null;

  const patient = await getPatientById(user.role);
  return (

    <div className='pl-24 pr-96 py-16'>
      <AccountProfile user={user} />
      <PatientDetails patient={patient} />
    </div>
  )
}

export default page