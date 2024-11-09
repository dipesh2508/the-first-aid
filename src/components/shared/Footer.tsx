"use client";

import logo from "@/assets/footerLogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import MotionDiv from "@/components/animations/MotionDiv";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Features", href: "/features" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookies" },
];

const Footer = () => {
  const socialIconVariants = {
    hover: {
      scale: 1.15,
      rotate: 8,
      transition: { duration: 0.2, type: "spring", stiffness: 300 },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#64B5F6",
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <footer className="relative h-full lg:h-auto w-full bg-gradient-to-br from-primary-7 to-primary-8 px-6 py-10 lg:p-10 text-white">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 justify-between">
          {/* Logo Section */}
          <MotionDiv className="lg:max-w-sm flex flex-col items-center" variants={containerVariants}>
            <Link href="/" className="flex flex-col items-center gap-4 my-auto" rel="noreferrer">
              <div className="flex items-center gap-3">
                <Image
                  src={logo}
                  height={120}
                  className="hover:opacity-90 transition-opacity"
                  alt="The First Aid Logo"
                  loading="lazy"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-serif tracking-wider text-white">
                    THE FIRST
                  </span>
                  <span className="text-4xl font-serif tracking-wider text-white">
                    AID
                  </span>
                </div>
              </div>
            </Link>
          </MotionDiv>

          {/* Links Sections */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-24">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4 text-primary-3">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <MotionDiv variants={linkVariants} whileHover="hover">
                      <Link
                        href={item.href}
                        className="text-primary-1 hover:text-primary-3 transition-colors"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </MotionDiv>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4 text-primary-3">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <MotionDiv variants={linkVariants} whileHover="hover">
                      <Link
                        href={item.href}
                        className="text-primary-1 hover:text-primary-3 transition-colors"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </MotionDiv>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col-reverse lg:flex-row gap-6 justify-between items-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-start gap-1"
          >
            <span className="text-sm text-primary-1">
              Under the org Try N Test
            </span>
            <p className="text-primary-1 text-sm">
              © {new Date().getFullYear()} The First Aid. All rights reserved.
            </p>
          </MotionDiv>

          <div className="flex gap-4">
            {[
              { Icon: FaXTwitter, href: "/", label: "Twitter" },
              { Icon: FaLinkedin, href: "/", label: "LinkedIn" },
              {
                Icon: FaGithub,
                href: "https://github.com/Try-N-Test",
                label: "GitHub",
              },
              {
                Icon: HiOutlineMail,
                href: "mailto:tnt.tryntest@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <MotionDiv
                key={label}
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Link
                  href={href}
                  aria-label={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-6/30 hover:bg-primary-5 backdrop-blur-sm transition-colors">
                    <Icon className="text-lg" />
                  </span>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
    </footer>
  );
};

export default Footer;
