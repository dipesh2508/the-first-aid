import { ProfileData, MedicalData } from "@/constant/example";
import { getPatientById } from "@/lib/actions/patient.actions";
import { fetchUser, fetchUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

const page = async ({params}:{
  params:{
    id:string
  }
}) => {

  const {id} = params;

  const user = await fetchUserById(id);
  if (!user) {
    return null;
  }

  const patientData = await getPatientById(user.role)
  if (!patientData) {
    return null;
  }

  return (
    <section className="px-12 w-full py-8">
      <h1 className=" mx-28 font-bold font-serif text-5xl mb-8">Profile</h1>

      <div className="mx-24 drop-shadow-2xl border-2 shadow-2xl border-slate-200 py-12 px-8 rounded-2xl h-full flex flex-col gap-6 mb-36">
        <div className="flex flex-row items-center justify-between pr-4">
          <h3 className="font-serif font-semibold text-3xl">
            Personal Information
          </h3>
          <Link
            href="/user/profile/edit"
            className="border p-3 rounded-md shadow-xl"
          >
            <FaRegEdit size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="font-semibold text-lg">Email</h5>
            <p className="font-light text-sm">{user.email}</p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Phone</h5>
            <p className="font-light text-sm">{user.phone}</p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Username</h5>
            <p className="font-light text-sm">{user.username}</p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="font-semibold text-lg">Gender</h5>
            <p className="font-light text-sm">{user.gender}</p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Aadhar Number</h5>
            <p className="font-light text-sm">{user.aadhar}</p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="font-semibold text-lg">Nominees</h5>
            <p className="font-light text-sm flex flex-col gap-1">
              {patientData?.nominees?.map((item: string, index: number) => {
                return <span key={index}>&#x2022;{item}</span>;
              })}
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Emergency Contacts</h5>
            <p className="font-light text-sm flex flex-col gap-1">
            {patientData?.emergencyContacts?.map((item: string, index: number) => {
                return (
                  <span key={index}>
                    &#x2022; Contact {index + 1} : {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <h3 className="font-serif font-semibold text-3xl">
          Medical Information
        </h3>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="font-semibold text-lg">Blood Group</h5>
            <p className="font-light text-sm">{patientData.bloodGroup}</p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Allergy List</h5>
            <p className="font-light text-sm flex flex-row gap-1">
              {patientData.allergies?.map((item: string, index:number) => {
                return <span key={index}>{item},</span>;
              })}
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Medical Conditions</h5>
            <p className="font-light text-sm flex flex-row gap-1">
              {patientData.medicalConditions?.map((item: string, index:number) => {
                return <span key={index}>{item},</span>;
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="font-semibold text-lg">Medications</h5>
            <p className="font-light text-sm flex flex-row gap-1">
              {patientData.medications?.map((item: string, index:number) => {
                return <span key={index}>{item},</span>;
              })}
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Surgeries</h5>
            <p className="font-light text-sm flex flex-row gap-1">
              {patientData.surgeries?.map((item: string, index:number) => {
                return <span key={index}>{item},</span>;
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
