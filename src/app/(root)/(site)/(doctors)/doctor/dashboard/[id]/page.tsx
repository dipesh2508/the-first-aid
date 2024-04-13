import ProfileCard from "@/components/userDashboard/ProfileCard";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import { DataTable } from "./data-table";
import { Payment, appointmentColumn } from "./appointmentColumn";
const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
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
          <DataTable data={data} columns={appointmentColumn} />
        </div>
      </section>
    </div>
  );
};

export default Page;
