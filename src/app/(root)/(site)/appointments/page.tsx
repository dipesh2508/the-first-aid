import AppointmentForm from '@/components/forms/AppointmentForm'
import Image from "next/image";
import logo from "@/assets/TheFirstAid.png";
import MotionDiv from "@/components/animations/MotionDiv";

const page = () => {
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
              Book Appointment
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to schedule your appointment
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 mx-auto"
          >
            <AppointmentForm />
          </MotionDiv>
        </MotionDiv>
      </div>
    </main>
  );
};

export default page;
