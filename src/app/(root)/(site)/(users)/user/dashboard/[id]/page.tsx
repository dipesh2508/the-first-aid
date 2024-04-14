import ProfileCard from "@/components/userDashboard/ProfileCard";
import { userLinksEmergency, userLinksProfile } from "@/constant/dashboard";
import React from "react";

const Page = ({params}: 
  {params: any}
) => {

  const { id } = params;
  return (
    <>
      <section className="min-h-screen mx-24 my-8 ">
        <div className="container  p-2 text-gray-50 sm:p-4">
          <div className="my-2 flex justify-between">
            <h2 className="mb-4 text-2xl text-black font-semibold leading-3">
              Profile
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userLinksProfile.map((data, index) => {
            return (
              <ProfileCard
                key={index}
                title={data.title}
                name={data.name}
                link={data.link}
                linkText={data.linkText}
                Icon={data.Icon}
                isReversed={data.isReversed}
              />
            );
          })}
        </div>
        <div className="container mt-16  p-2 text-gray-50 sm:p-4">
          <div className=" flex justify-between">
            <h2 className=" text-2xl text-black font-semibold leading-3">
              Profile
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userLinksEmergency.map((data, index) => {
            return (
              <ProfileCard
                key={index}
                title={data.title}
                name={data.name}
                link={data.link}
                linkText={data.linkText}
                Icon={data.Icon}
                isReversed={data.isReversed}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
