"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import logo from "@/assets/footerLogo.png";
import Image from "next/image";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoPowerOutline } from "react-icons/io5";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import MotionDiv from "../animations/MotionDiv";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { sidebarItems } from "./Sidebar";

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="p-4 font-light bg-primary-7 text-black relative">
        <div className="container flex justify-between h-12 mx-auto">
          <div className="flex  justify-between gap-x-12">
            <Link
              rel="noopener noreferrer"
              href="/dashboard"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <Image
                src={logo}
                alt="logo"
                className="p-4 size-24 object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Button variant="outline" size="icon" className="font-light bg-white">
                {isMenuOpen ? (
                  <IoClose className="h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="h-6 w-6" />
                )}
              </Button>
            </MotionDiv>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="font-light bg-white"
              >
                <MdOutlineNotificationAdd className="h-4 w-4" />
              </Button>
            </MotionDiv>
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/profile">
                <Button
                  variant="outline"
                  size="icon"
                  className="font-light bg-white"
                >
                  <FaRegUser className="h-4 w-4" />
                </Button>
              </Link>
            </MotionDiv>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="font-light bg-white" variant="outline">
                    <IoPowerOutline className="h-4 w-4" />
                  </Button>
                </MotionDiv>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-primary-9">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-700">
                    {"You'll be logged out and redirected to the homepage."}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-primary-9 text-white">
                    Cancel
                  </AlertDialogCancel>
                  <SignedIn>
                    <SignOutButton>
                      <AlertDialogAction className="bg-white text-primary-9 border border-primary-9">
                        Continue
                      </AlertDialogAction>
                    </SignOutButton>
                  </SignedIn>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MotionDiv
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white absolute w-full z-50 shadow-lg overflow-hidden"
      >
        <div className="px-4 py-2">
          {sidebarItems.map((item) => (
            <MotionDiv
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.route}
                className="flex items-center gap-3 py-3 text-red-800 hover:bg-red-50 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            </MotionDiv>
          ))}

          {/* Mobile Logout Button */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <MotionDiv
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  className="w-full mt-4 font-light bg-white text-red-800 border border-red-800 flex items-center gap-3"
                  variant="outline"
                >
                  <IoPowerOutline className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </MotionDiv>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-primary-9">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-700">
                  {"You'll be logged out and redirected to the homepage."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-primary-9 text-white">
                  Cancel
                </AlertDialogCancel>
                <SignedIn>
                  <SignOutButton>
                    <AlertDialogAction className="bg-white text-primary-9 border border-primary-9">
                      Continue
                    </AlertDialogAction>
                  </SignOutButton>
                </SignedIn>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default DashboardNav;
