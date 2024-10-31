import AddDoctorForm from "@/components/forms/AddDoctorForm";
import Image from "next/image";
import logo from "@/assets/TheFirstAid.png";
import MotionDiv from "@/components/animations/MotionDiv";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-1/50 to-white py-10 w-full">
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
            className="mb-8 text-center"
          >
            <Image src={logo} alt="logo" className="mx-auto h-24 w-auto" />
            <h1 className="text-3xl font-bold text-primary-9 mb-2">
              Add New Doctor
            </h1>
            <p className="text-muted-foreground">
              Enter the doctor&apos;s details to add them to the system
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 mx-auto"
          >
            <AddDoctorForm />
          </MotionDiv>
        </MotionDiv>
      </div>
    </main>
  );
};

export default Page;
