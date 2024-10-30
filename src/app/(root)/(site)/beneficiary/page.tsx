import GuardianForm from '@/components/forms/GuardianForm'
import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUserbyClerkId(user.id);
  if (!userInfo) return null;

  const serializedId = userInfo._id.toString();
  const serializedName = String(userInfo.name);

  return (
    <div className='flex w-full items-center justify-center min-h-screen bg-white py-6'>
        <GuardianForm 
          patientId={serializedId} 
          name={serializedName} 
        />
    </div>
  )
}

export default page
