import React from 'react'
import BgImage from '@/assets/bg_appointment.png'
import AppointmentForm from '../forms/AppointmentForm'
import Image from 'next/image'

const Appointment: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src={BgImage}
        layout="fill"
        objectFit="cover"
        alt="Hospital Background"
        className="z-0"
      />
      <div className=" max-w-lg w-full z-10">
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Appointment
