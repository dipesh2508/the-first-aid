import ProfileCard from "@/components/userDashboard/ProfileCard";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import { DataTable } from "./data-table";
import { Payment, appointmentColumn } from "./appointmentColumn";
const data: Payment[] = [
  {
    id: 51,
    name: "Aisha Kapoor",
    age: 28,
    gender: "Female",
    condition: "Migraine",
    admitted: true,
    roomNumber: "314C",
  },
  {
    id: 52,
    name: "Ajay Singh",
    age: 55,
    gender: "Male",
    condition: "Arthritis",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 53,
    name: "Anjali Patel",
    age: 37,
    gender: "Female",
    condition: "Asthma",
    admitted: true,
    roomNumber: "401B",
  },
  {
    id: 54,
    name: "Arjun Desai",
    age: 18,
    gender: "Male",
    condition: "Appendicitis",
    admitted: true,
    roomNumber: "508A",
  },
  {
    id: 55,
    name: "Avantika Joshi",
    age: 42,
    gender: "Female",
    condition: "Anxiety",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 56,
    name: "Balram Sharma",
    age: 72,
    gender: "Male",
    condition: "Back Pain",
    admitted: true,
    roomNumber: "612C",
  },
  {
    id: 57,
    name: "Bhavna Mehta",
    age: 30,
    gender: "Female",
    condition: "Bronchitis",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 58,
    name: "Bikram Kumar",
    age: 68,
    gender: "Male",
    condition: "Cancer",
    admitted: true,
    roomNumber: "705B",
  },
  {
    id: 59,
    name: "Chandra Malik",
    age: 46,
    gender: "Female",
    condition: "Chronic Fatigue Syndrome",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 60,
    name: "Dhruv Das",
    age: 25,
    gender: "Male",
    condition: "Cold",
    admitted: true,
    roomNumber: "814A",
  },
  {
    id: 61,
    name: "Disha Verma",
    age: 19,
    gender: "Female",
    condition: "Depression",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 62,
    name: "Ekta Gupta",
    age: 34,
    gender: "Female",
    condition: "Dermatitis",
    admitted: true,
    roomNumber: "901B",
  },
  {
    id: 63,
    name: "Gaurav Bajaj",
    age: 52,
    gender: "Male",
    condition: "Diabetes",
    admitted: false,
    roomNumber: null,
  },
  {
    id: 64,
    name: "Geeta Khanna",
    age: 65,
    gender: "Female",
    condition: "Eczema",
    admitted: true,
    roomNumber: "1008A",
  },
  {
    id: 65,
    name: "Harshvardhan Rao",
    age: 22,
    gender: "Male",
    condition: "Fever",
    admitted: false,
    roomNumber: null,
  },
  // ... Add more patients with diverse Indian names ...

  {
    id: 100,
    name: "Yamini Nair",
    age: 48,
    gender: "Female",
    condition: "Ulcerative Colitis",
    admitted: true,
    roomNumber: "2014C",
  },
];
const Page = () => {
  return (
    <div>
      <section className="min-h-screen mx-24 my-8 ">
        <div className="container  p-2 text-gray-50 sm:p-4">
          <div className="my-2 flex justify-between">
            <h2 className="mb-4 text-2xl text-black font-semibold leading-3">
              Profile
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProfileCard
            title="profile"
            name="Shardha Anand"
            link="#"
            linkText="Visit Profile"
            Icon={FaRegCircleUser}
            isReversed={false}
          />
        </div>
        <div className="container mt-16  p-2 text-gray-50 sm:p-4">
          <div className=" flex justify-between">
            <h2 className=" text-2xl text-black font-semibold leading-3">
              Appointment
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 ">
          <DataTable data={data} columns={appointmentColumn} />
        </div>
        <div className="container mt-16  p-2 text-gray-50 sm:p-4">
          <div className=" flex justify-between">
            <h2 className=" text-2xl text-black font-semibold leading-3">
              Recent Patients
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 ">
          <DataTable data={data.toReversed()} columns={appointmentColumn} />
        </div>
      </section>
    </div>
  );
};

export default Page;
