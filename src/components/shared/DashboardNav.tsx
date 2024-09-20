"use client";
import React from "react";
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

const DashboardNav = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="p-4 font-light bg-primary-9 text-black">
        <div className="container flex justify-between h-12 mx-auto">
          <div className="flex  justify-between gap-x-12">
            <Link
              rel="noopener noreferrer"
              href="#"
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
    </MotionDiv>
  );
};

export default DashboardNav;
