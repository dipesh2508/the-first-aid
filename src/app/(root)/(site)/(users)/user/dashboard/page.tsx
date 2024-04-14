import ProfileCard from "@/components/userDashboard/ProfileCard";
import { userLinksEmergency, userLinksProfile } from "@/constant/dashboard";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const userData = await fetchUser(user.id);

  if (!userData) {
    return null;
  }

  if (!userData?.mpin) {
    redirect("/mpin-setup");
  }

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
          <ProfileCard
            title="Profile"
            name={userData?.name || ""}
            link={`/user/profile/${userData?._id}`}
            linkText="Visit Profile"
            Icon={FaRegCircleUser}
            isReversed={false}
          />
          <ProfileCard
            title="Beneficiary"
            name="Keep your family informed, always"
            link="/user/beneficiaries"
            linkText="Add Beneficiaries"
            Icon={FaUserPlus}
            isReversed={true}
          />
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
