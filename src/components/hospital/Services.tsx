import React from 'react';
import { FaHeartbeat, FaBrain, FaLungs, FaBone, FaEye } from 'react-icons/fa';
import { GiKidneys } from "react-icons/gi";
const services = [
  { icon: FaHeartbeat, name: 'Cardiology' },
  { icon: FaBrain, name: 'Neurology' },
  { icon: FaLungs, name: 'Pulmonology' },
  { icon: GiKidneys, name: 'Nephrology' },
  { icon: FaBone, name: 'Orthopedics' },
  { icon: FaEye, name: 'Ophthalmology' },
];

const Services: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-red-200 p-4 rounded-lg mb-4">
                <service.icon className="text-4xl text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-red-800">{service.name}</h3>
              <div className="w-16 h-0.5 bg-red-200 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
