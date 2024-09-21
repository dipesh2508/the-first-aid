"use client";

import React, { useState } from "react";
import Image from "next/image";
import bgImage from "@/assets/hospital.png";
import MotionDiv from "@/components/animations/MotionDiv";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getHospitalsByLocation } from "@/lib/actions/hospital.actions";
import HospitalCard from "@/components/cards/HospitalCard";
import hospitalImage from "@/assets/hospital1.png";

interface IHospital {
  _id: string;
  image: string;
  name: string;
  address: string;
  rating: number;
  type: string;
  services: string[];
}
const Hero = () => {
  const [location, setLocation] = useState("");

  const [hospitals, setHospitals] = useState<IHospital[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(location);
    const results = await getHospitalsByLocation(location);
    console.log(results);
    setHospitals(results);
  };

  return (
    <>
      <div className="relative h-[90vh] min-h-[400px]">
        <Image
          src={bgImage}
          alt="Hospital Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <MotionDiv variants={itemVariants} className="max-w-2xl">
            <h1 className="text-4xl font-bold text-primary-8 mb-4">
              Caring for you, Wherever you are.{" "}
              <span className="text-primary-5">Discover Hospitals </span>near
              you for immediate support.
            </h1>
            <form onSubmit={handleSubmit} className="flex mt-6">
              <div className="relative flex-grow">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 ring-gray-300 ring-1 text-primary-8 bg-white rounded-r-none"
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="rounded-l-none bg-primary-6 text-white px-6 py-2 rounded-r-md hover:bg-primary-7 transition duration-300"
              >
                Search
              </Button>
            </form>
          </MotionDiv>
        </div>
      </div>
      <MotionDiv variants={itemVariants} className="w-full mx-24 my-12">
        {hospitals.length > 0 && (
          <div className="container mx-auto flex flex-col">
            <h1 className="text-4xl font-bold text-primary-8 mb-4">
              Search Results

            </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <HospitalCard
                key={index}
                id={hospital._id}
                image={hospital.image}
                name={hospital.name}
                address={hospital.address}
                distance={`${Math.floor(Math.random() * 100) + 1} km`}
                rating={Math.floor(Math.random() * 5) + 1}
                reviewCount={Math.floor(Math.random() * 1000) + 1}
                type={hospital.type}
                services={hospital.services}
                buttonText="View Details"
              />
            ))}
          </div>
          </div>
        )}
      </MotionDiv>
    </>
  );
};

export default Hero;
