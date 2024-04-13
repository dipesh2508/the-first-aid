import React from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { menuLinks } from "@/constant/menu";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <header className="p-4 font-light  text-black">
        <div className="container flex justify-between h-12 mx-auto">
          <div className="flex  justify-between gap-x-12">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <Image src={logo} alt="logo" height={50} width={50} />
            </Link>
            <ul className="items-stretch hidden  gap-x-8   lg:flex">
              {menuLinks.map((menu, index) => {
                return (
                  <li className="flex" key={index}>
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 hover:text-primary active:text-primary"
                    >
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden  gap-2 lg:flex">
            <Button variant={"secondary"} className="font-light">
              For Doctors
            </Button>
            <Separator orientation="vertical" className="h-8 w-[3px]" />

            <Button className="border-primary-4 hover:bg-primary-5 border bg-transparent  px-8  h-fit font-normal text-black hover:text-black hover:border-primary-5">
              Log In
            </Button>
            <Button className="font-normal px-8 bg-primary-4 hover:bg-primary-5  h-fit">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
