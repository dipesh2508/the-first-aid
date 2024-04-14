import { FaRegCircleUser } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { FaUserPlus } from "react-icons/fa6";
import { TbAmbulance } from "react-icons/tb";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";

interface userLinks {
  title: string;
  name: string;
  link: string;
  linkText: string;
  Icon: IconType;
  isReversed: Boolean;
}

export const userLinksProfile: userLinks[] = [
  {
    title: "Profile",
    name: "kislay",
    link: "#",
    linkText: "Visit Profile",
    Icon: FaRegCircleUser,
    isReversed: false,
  },
  {
    title: "Beneficiary",
    name: "Keep your family informed, always",
    link: "#",
    linkText: "Add Beneficiaries",
    Icon: FaUserPlus,
    isReversed: true,
  },
];

export const userLinksEmergency: userLinks[] = [
  {
    title: "Ambulance",
    name: "Contact nearest ambulance",
    link: "#",
    linkText: "Contact",
    Icon: TbAmbulance,
    isReversed: false,
  },
  {
    title: "Appointment",
    name: "Connect with Doctor",
    link: "#",
    linkText: "Connect",
    Icon: FaRegCalendarPlus,
    isReversed: false,
  },
  {
    title: "Remote consent",
    name: "Grant consent, at your convenience",
    link: "/user/consent",
    linkText: "Grant",
    Icon: FaRegCheckCircle,
    isReversed: false,
  },
  {
    title: "Fill Form Instantly",
    name: "Fill in a Flash, Focus on Getting Better",
    link: "/user/dashboard/emergency",
    linkText: "Fill Form",
    Icon: PiNotepadBold,
    isReversed: false,
  },
];
