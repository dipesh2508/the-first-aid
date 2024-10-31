import { getPatientById } from "@/lib/actions/patient.actions";
import {
  fetchUserbyClerkId,
  fetchUserNamesById,
} from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import MotionDiv from "@/components/animations/MotionDiv";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  const userData = await currentUser();
  if (!userData) return null;
  const user = await fetchUserbyClerkId(userData.id);
  if (!user) return null;

  console.log(user.age, user.address, user.gender);

  const patientData = await getPatientById(user.patientId);
  if (!patientData) return null;

  const nomineeNames = await fetchUserNamesById(patientData.nominees || []);

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
      className="h-screen w-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionDiv variants={itemVariants} className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          {user.role === "admin" && (
            <Link href="/admin/dashboard">
              <Button>Admin View</Button>
            </Link>
          )}
        </div>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md shadow-primary-2 p-6 mb-6 "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={userData.imageUrl}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600">Patient</p>
              <p className="text-gray-600">{user.address}</p>
            </div>
          </div>
          <FaRegEdit className="text-gray-400 cursor-pointer" size={24} />
        </div>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md shadow-primary-2 p-6 mb-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h3>
          <FaRegEdit className="text-gray-400 cursor-pointer" size={20} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Email</p>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-gray-800">{user.phone}</p>
          </div>
          <div>
            <p className="text-gray-600">Address</p>
            <p className="text-gray-800">{user.address}</p>
          </div>
          <div>
            <p className="text-gray-600">Gender</p>
            <p className="text-gray-800">{user.gender}</p>
          </div>
          <div>
            <p className="text-gray-600">Age</p>
            <p className="text-gray-800">{user.age}</p>
          </div>
          <div>
            <p className="text-gray-600">Nominees</p>
            <ul>
              {nomineeNames.length ? (
                nomineeNames.map((nominee, index) => (
                  <li key={index} className="text-gray-800">
                    {nominee}
                  </li>
                ))
              ) : (
                <li className="text-gray-800">N/A</li>
              )}
            </ul>
          </div>
          <div>
            <p className="text-gray-600">Emergency Contacts</p>
            <ul>
              {patientData.emergencyContacts?.length ? (
                patientData.emergencyContacts.map(
                  (contact: string, index: number) => (
                    <li key={index} className="text-gray-800">
                      Contact {index + 1}: {contact}
                    </li>
                  )
                )
              ) : (
                <li className="text-gray-800">N/A</li>
              )}
            </ul>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md shadow-primary-2 p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Medical Information
          </h3>
          <FaRegEdit className="text-gray-400 cursor-pointer" size={20} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Blood Group</p>
            <p className="text-gray-800">{patientData.bloodGroup}</p>
          </div>
          <div>
            <p className="text-gray-600">Allergy List</p>
            <p className="text-gray-800">
              {patientData.allergies?.length
                ? patientData.allergies.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Medical Conditions</p>
            <p className="text-gray-800">
              {patientData.medicalConditions?.length
                ? patientData.medicalConditions.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Medications</p>
            <p className="text-gray-800">
              {patientData.medications?.length
                ? patientData.medications.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Surgeries</p>
            <p className="text-gray-800">
              {patientData.surgeries?.length
                ? patientData.surgeries.join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Page;
