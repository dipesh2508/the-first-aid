"use client";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { menuLinks } from "@/lib/constant/menu";
import Link from "next/link";
import logo from "@/assets/TheFirstAid.png";
import Image from "next/image";
import { useState } from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <header className="p-4 font-light relative text-black">
          <div className="container flex justify-between h-12 mx-auto">
            <div className="flex justify-between gap-x-12">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <Image
                  src={logo}
                  alt="logo"
                  className="p-4"
                  height={200}
                  width={200}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6932%) hue-rotate(359deg) brightness(100%) contrast(124%)",
                  }}
                />
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-primary-4 dark:hover:bg-primary-7 dark:focus:ring-primary-8 md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <ul className="items-stretch hidden gap-x-8 lg:flex">
                {menuLinks.map((menu, index) => (
                  <motion.li
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 hover:text-primary active:text-primary"
                    >
                      {menu.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/admin/dashboard">
                  <Button variant={"ghost"} className="font-light">
                    For Doctors
                  </Button>
                </Link>
              </motion.div>
              <Separator orientation="vertical" className="h-8 w-[3px]" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/sign-in">
                  <Button className="border-primary-4 hover:bg-transparent border bg-transparent px-8 h-fit font-normal text-black hover:text-black hover:border-primary-5">
                    Log In
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/sign-in">
                  <Button className="font-normal px-8 bg-primary-6 hover:bg-primary-7 h-fit text-white">
                    Sign Up
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute md:hidden z-50 bg-white w-full"
            >
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-4">
                  {menuLinks.map((menu, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="block py-2 text-base font-medium text-gray-900 hover:text-primary"
                      >
                        {menu.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="px-4 py-6 border-t">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button variant="ghost" className="w-full mb-3 font-light">
                    For Doctors
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link href="/sign-in" className="block mb-3">
                    <Button className="w-full border-primary-4 hover:bg-transparent border bg-transparent font-normal text-black hover:text-black hover:border-primary-5">
                      Log In
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link href="/sign-in" className="block">
                    <Button className="w-full font-normal bg-primary-4 hover:bg-primary-5">
                      Sign Up
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </header>
      </MotionDiv>
    </>
  );
};

export default Navbar;
