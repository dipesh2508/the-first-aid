import AppointmentForm from '@/components/forms/AppointmentForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-full items-center justify-center min-h-screen bg-white py-6'>
      <h1>Appointments</h1>
      <AppointmentForm />
    </div>


  )
}

export default page
