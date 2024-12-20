"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { menuLinks } from "@/lib/constant/menu";
import Link from "next/link";
import logo from "@/assets/TheFirstAid.png";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

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
        className={`sticky top-0 z-50 ${isOpen ? 'bg-white' : 'bg-white/80'} backdrop-blur-md shadow-sm`}
      >
        <header className="p-4 font-light relative">
          <div className="container flex justify-between h-12 mx-auto">
            <div className="flex justify-between gap-x-12">
              <Link href="/" className="flex items-center p-2">
                <Image
                  src={logo}
                  alt="logo"
                  className="p-4"
                  height={200}
                  width={200}
                  style={{
                    filter: "brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6932%) hue-rotate(359deg) brightness(100%) contrast(124%)",
                  }}
                />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle menu</span>
                {isOpen ? (
                  <RiCloseLine className="w-6 h-6" />
                ) : (
                  <RxHamburgerMenu className="w-6 h-6" />
                )}
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
                      href={menu.link}
                      className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary-6 hover:border-primary-6 transition-colors duration-300"
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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute md:hidden z-50 bg-white w-full left-0 shadow-lg overflow-hidden border-t border-gray-100"
              >
                <div className="container py-6 px-4">
                  <div className="grid gap-y-6">
                    {menuLinks.map((menu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={menu.link}
                          className="flex items-center space-x-2 text-gray-600 hover:text-primary-6 transition-colors duration-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary-6/40"></span>
                          <span>{menu.title}</span>
                        </Link>
                      </motion.div>
                    ))}
                    
                    <Separator className="my-2" />
                    
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (menuLinks.length + 1) * 0.1 }}
                      >
                        <Link
                          href="/admin/dashboard"
                          className="flex items-center px-4 py-2 bg-primary-1/50 rounded-lg text-primary-6 hover:bg-primary-2 transition-colors duration-300"
                        >
                          For Doctors
                        </Link>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (menuLinks.length + 2) * 0.1 }}
                        >
                          <Link
                            href="/sign-in"
                            className="flex items-center justify-center px-4 py-2 border border-primary-4 rounded-lg text-gray-700 hover:bg-primary-1 hover:text-primary-6 transition-all duration-300"
                          >
                            Log in
                          </Link>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (menuLinks.length + 3) * 0.1 }}
                        >
                          <Link
                            href="/sign-up"
                            className="flex items-center justify-center px-4 py-2 bg-primary-6 rounded-lg text-white hover:bg-primary-7 transition-colors duration-300"
                          >
                            Sign up
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </MotionDiv>
    </>
  );
};

export default Navbar;
