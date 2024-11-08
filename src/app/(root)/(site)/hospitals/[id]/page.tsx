import HeroHospital from "@/components/hospital/HeroHospital";
import Location from "@/components/hospital/Location";
import Services from "@/components/hospital/Services";
import Appointment from "@/components/hospital/Appointment";
import React from "react";
import OurDoctors from "@/components/hospital/Doctors";
import { getHospitalById } from "@/lib/actions/hospital.actions";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const hospital = JSON.parse(JSON.stringify(await getHospitalById(params.id)));
  if (!hospital) redirect("/hospitals");
  return (
    <div className="container h-screen mx-auto overflow-y-scroll">
      <HeroHospital name={hospital.name} phone={hospital.phone} email={hospital.email} city={hospital.city} />
      <Location />
      <Services />
      <Appointment />
      <OurDoctors />
    </div>
  );
};

export default page;
