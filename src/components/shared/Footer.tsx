"use client";

import logo from "@/assets/footerLogo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="h-full lg:h-72 w-full bg-primary-7 p-14 text-white">
      <div className="flex lg:flex-row  gap-x-8 lg:gap-x-72">
        <div className="rounded-md  p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              height={108}
              className="m-0"
              alt="Anuvaad Sangam Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-52">
          <div className="flex items-center">
            <ul className="font-primary text-base font-light">
              <li className="mb-4">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <ul className="font-primary hover:text-color text-base font-light">
              <li className="mb-4">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex lg:flex-row flex-col-reverse gap-2 justify-center items-center  lg:justify-between">
        <div className="flex items-center">
          <p className="font-primary text-xs font-light">
            © 2024 The First Aid All rights reserved
          </p>
        </div>

        <div className="flex gap-x-1 lg:gap-x-4">
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-6 hover:bg-primary-7">
              <FaXTwitter />
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-6 hover:bg-primary-7">
              <FaFacebook />
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-6 from-insta1 via-insta3  to-insta5 hover:bg-primary-7">
              {/* <AiOutlineInstagram /> */}
              <SiInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
