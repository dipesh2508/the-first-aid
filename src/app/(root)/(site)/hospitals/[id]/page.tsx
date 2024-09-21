import HeroHospital from '@/components/hospital/HeroHospital'
import Location from '@/components/hospital/Location'
import Services from '@/components/hospital/Services'
import Appointment from '@/components/hospital/Appointment'
import React from 'react'
import OurDoctors from '@/components/hospital/Doctors'

const page = () => {
  return (
    <div className='container h-screen mx-auto overflow-y-scroll'>
      <HeroHospital /> 
      <Location />
      <Services />
      <Appointment />
      <OurDoctors />
    </div>
  )
}

export default page
