import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { getAllHospitals } from '@/lib/actions/hospital.actions';
import { getAppointmentsByHospital } from '@/lib/actions/appointment.action';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

// Add these components - create them in a new components folder
import HospitalSelector from '@/components/shared/HospitalSelector';
import AppointmentsTable from '@/components/shared/AppointmentsTable';

const Page = async () => {
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

    const hospitals = await getAllHospitals();

    return (
      <div className="container mx-auto p-6 text-slate-900">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="mb-6">
          <HospitalSelector hospitals={hospitals} />
        </div>

        <AppointmentsTable />
      </div>
    )
}

export default Page
