import React from "react";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Dipesh from '@/assets/about/Dipesh.jpg'
import Isheta from '@/assets/about/Isheta.jpg'
import Shariq from '@/assets/about/Shariq.jpg'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TeamMember = ({ name, role, image, linkedin, github }: any) => (
  <MotionDiv
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="relative h-96 w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
    </div>

    <div className="absolute bottom-4 left-4 right-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-sm text-white/75">{role}</p>
        </div>
        <div className="flex gap-2">
          {linkedin && (
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30">
                <FaLinkedin className="size-5 text-white" />
              </div>
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30">
                <FaGithub className="size-5 text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </MotionDiv>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Dipesh Ranjan",
      role: "Team Lead & Full Stack Developer",
      image: Dipesh,
      linkedin: "https://www.linkedin.com/in/dipesh-ranjan/",
      github: "https://github.com/dipesh2508",
    },
    {
      name: "Isheta Aggarwal",
      role: "Frontend Developer & UI/UX Designer",
      image: Isheta,
      linkedin: "https://www.linkedin.com/in/isheta-aggarwal/",
      github: "https://github.com/isheta20",
    },
    {
      name: "Mohd Shariq",
      role: "Frontend Developer",
      image: Shariq,
      linkedin: "https://www.linkedin.com/in/mohd-shariq74",
      github: "https://github.com/shariq740",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of dedicated developers and designers work tirelessly to ensure you receive the best possible care when you need it most.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 