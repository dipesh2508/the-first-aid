import AccountProfile from '@/components/form/AccountProfile'
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {

  const userData = await currentUser();
  if(!userData) return null;

  const user = await fetchUser(userData.id); 
  if(!user) return null;
  return (

    <div className='pl-24 pr-96 py-16'>
      <AccountProfile user={user} />
    </div>
  )
}

export default page