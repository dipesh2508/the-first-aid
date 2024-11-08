import GuardianForm from "@/components/forms/GuardianForm";
import { fetchUserbyClerkId } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import logo from "@/assets/TheFirstAid.png";
import MotionDiv from "@/components/animations/MotionDiv";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUserbyClerkId(user.id);
  if (!userInfo) return null;

  const serializedId = userInfo._id.toString();
  const serializedName = String(userInfo.name);

  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-primary-1/50 to-white py-10 w-full">
      <div className="container max-w-3xl mx-auto px-4 w-full">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-lg shadow-lg p-6 md:p-8"
        >
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-center"
          >
            <Image
              src={logo}
              alt="logo"
              className="mx-auto h-24 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6932%) hue-rotate(359deg) brightness(100%) contrast(124%)",
              }}
            />
            <h1 className="text-3xl font-bold text-primary-9 mb-2">
              Add Beneficiary
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to add a beneficiary
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 mx-auto"
          >
            <GuardianForm patientId={serializedId} name={serializedName} />
          </MotionDiv>
        </MotionDiv>
      </div>
    </main>
  );
};

export default page;
