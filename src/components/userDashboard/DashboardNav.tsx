"use client";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { menuLinks } from "@/constant/menu";
import Link from "next/link";
import logo from "@/assets/footerLogo.png";
import Image from "next/image";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoExitOutline, IoPowerOutline } from "react-icons/io5";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
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

const DashboardNav = () => {
  const router = useRouter();
  return (
    <>
      <header className="p-4 font-light bg-primary-10  text-black">
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
          <div className="items-center flex-shrink-0 hidden  gap-2 lg:flex">
            <Button variant="outline" size="icon" className="font-light">
              <MdOutlineNotificationAdd className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon" className="font-light">
              <FaRegUser className="h-4 w-4" />
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="font-light" variant="outline">
                  <IoPowerOutline className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {"You'll be logged out and redirected to the homepage."}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <SignedIn>
                    <SignOutButton signOutCallback={() => router.push("/")}>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </SignOutButton>
                  </SignedIn>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardNav;
