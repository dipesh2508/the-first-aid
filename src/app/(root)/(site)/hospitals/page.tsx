import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import Hero from "@/components/hospital/Hero";
import HospitalCard from "@/components/cards/HospitalCard";
import { getAllHospitals } from "@/lib/actions/hospital.actions";

const HospitalsPage = async () => {

  const hospitalData = await getAllHospitals();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <MotionDiv
      className="h-screen w-full overflow-y-auto bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />

      <MotionDiv
        variants={itemVariants}
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8"
      >
        <h2 className="text-2xl font-bold text-primary-10 mb-8">
          Nearby Hospitals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalData.map((hospital, index) => (
            <HospitalCard
              key={index}
              image={hospital.image}
              name={hospital.name}
              address={hospital.address}
              distance={"1.5 km away from your location"}
              rating={4.5}
              reviewCount={100}
              type={hospital.type}

              services={hospital.services}
              id={hospital.id}
              buttonText="Contact Us"
            />

          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default HospitalsPage;
