import DashboardCard from "@/components/cards/DashboardCard";
import { userLinksEmergency } from "@/lib/constant/dashboard";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUserbyClerkId } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import MotionDiv from "@/components/animations/MotionDiv";

const Page: React.FC = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const userData = await fetchUserbyClerkId(user.id);

  if (!userData) {
    redirect("/onboarding");
  }

  if (!userData?.mpin) {
    redirect("/mpin-setup");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full md:w-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8"
    >
      <div className="container mx-auto">
        <MotionDiv variants={itemVariants}>
          <h1 className="text-3xl text-black font-semibold mb-8">
            Welcome, {userData?.name}
          </h1>
        </MotionDiv>
        <MotionDiv variants={itemVariants}>
          <h2 className="text-xl text-black font-semibold">Profile</h2>
        </MotionDiv>
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-16 gap-y-8"
          variants={containerVariants}
        >
          <MotionDiv variants={itemVariants}>
            <DashboardCard
              title="Profile"
              name={userData?.name || ""}
              link={`/profile`}
              linkText="Visit Profile"
              Icon={FaRegCircleUser}
              isReversed={false}
            />
          </MotionDiv>
          <MotionDiv variants={itemVariants}>
            <DashboardCard
              title="Legal Guardians"
              name="Keep your family informed, always"
              link="/user/beneficiaries"
              linkText="Add Guardians"
              Icon={FaUserPlus}
              isReversed={true}
            />
          </MotionDiv>
        </MotionDiv>
        <MotionDiv variants={itemVariants} className="my-8">
          <h2 className="text-xl text-black font-semibold">Emergency</h2>
        </MotionDiv>
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8"
          variants={containerVariants}
        >
          {userLinksEmergency.map((data, index) => (
            <MotionDiv key={index} variants={itemVariants} className="min-h-56">
              <DashboardCard
                title={data.title}
                name={data.name}
                link={data.link}
                linkText={data.linkText}
                Icon={data.Icon}
                isReversed={data.isReversed}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Page;
