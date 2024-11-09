import Link from "next/link";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/animations/MotionDiv";
import { FaHeartbeat } from "react-icons/fa";
import Navbar from "@/components/shared/Navbar";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pulseVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center">
          <MotionDiv
            variants={pulseVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-fit text-primary-6 mb-8"
          >
            <FaHeartbeat className="size-24" />
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Page Not Found
            </h1>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
              Don&apos;t panic! While we couldn&apos;t find the page you&apos;re
              looking for, our emergency response team is always here to help.
              Let&apos;s get you back to safety.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link href="/">
              <Button className="bg-primary-6 text-white hover:bg-primary-7">
                Return Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-primary-6 text-primary-6 hover:bg-primary-1"
              >
                Emergency Help
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
