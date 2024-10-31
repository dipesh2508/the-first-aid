import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const user = await currentUser();

    if (!user) {
      redirect("/sign-in");
    }
  
    const userData = await fetchUserbyClerkId(user.id);
  
    if (!userData) {
      redirect("/onboarding");
    }

    if (userData.role !== "admin") {
      redirect("/dashboard");
    }

  return (
    <div>

    </div>
  )
}

export default page
