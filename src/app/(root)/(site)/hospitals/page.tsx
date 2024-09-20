import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import Hero from "@/components/hospital/Hero";
import HospitalCard from "@/components/cards/HospitalCard";
import hospital1 from "@/assets/hospital1.png";
import hospital2 from "@/assets/hospital2.png";

const hospitalData = [
  {
    imageUrl: hospital1,
    name: "Ipollo Hospitals, Chennai",
    address: "21 Greams Lane, Off Greams Road, Chennai, Tamil Nadu, 600006",
    distance: "5.2 km away from your location",
    rating: 4.7,
    reviewCount: 1542,
    type: "General Hospital",
    facilities: ["Free Parking", "In-house Pharmacy", "Online Consultations"],
    buttonText: "Book Appointment",
  },
  {
    imageUrl: hospital2,
    name: "City General Hospital",
    address: "123 Main St, Downtown, Chennai, Tamil Nadu, 600001",
    distance: "3.8 km away from your location",
    rating: 4.5,
    reviewCount: 1280,
    type: "Multi-Specialty Hospital",
    facilities: ["24/7 Emergency", "Diagnostic Center", "Cafeteria"],
    buttonText: "View Details",
  },
  // Add more hospital objects as needed
];

const HospitalsPage = () => {
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
      className="h-screen w-full overflow-y-auto bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />

      <MotionDiv
        variants={itemVariants}
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Nearby Hospitals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalData.map((hospital, index) => (
            <HospitalCard
              key={index}
              {...hospital}
              onButtonClick={() => console.log(`Clicked on ${hospital.name}`)}
            />
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default HospitalsPage;
