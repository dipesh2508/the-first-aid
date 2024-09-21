import GuardianForm from '@/components/forms/GuardianForm'
import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUserbyClerkId(user.id);
  if (!userInfo) return null;

  const id = userInfo._id;
  const idString = id.toString();
  console.log(idString);
  const obj = {
    patientId: idString
  }
  return (
    <div className='flex w-full items-center justify-center min-h-screen bg-white py-6'>
        <GuardianForm patientId={obj} />
    </div>


  )
}

export default page
