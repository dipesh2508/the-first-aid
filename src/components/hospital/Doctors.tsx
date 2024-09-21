import React from 'react';
import DoctorCard from '@/components/cards/DoctorCard';
import DrImage from '@/assets/drImage.png'; // Adjust the import path as needed

const doctors = [
  {
    name: "Dr. Anjali Sharma",
    qualification: "MBBS MD",
    department: "Department of Cardiology",
  },
  {
    name: "Dr. Rajesh Gupta",
    qualification: "MBBS MD",
    department: "Department of Neurology",
  },
  {
    name: "Dr. Priya Patel",
    qualification: "MBBS MD",
    department: "Department of Pediatrics",
  },
  // Add more doctors as needed
];

const OurDoctors: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              imageSrc={DrImage}
              name={doctor.name}
              qualification={doctor.qualification}
              department={doctor.department}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;