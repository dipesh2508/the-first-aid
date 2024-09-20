'use client';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaHome, FaUserFriends, FaHospital, FaCalendarCheck, FaFileContract, FaUser } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import MotionDiv from '../animations/MotionDiv';

interface SidebarItem {
  id: string;
  label: string;
  icon: IconType;
  route: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'home', label: 'Home', icon: FaHome, route: '/dashboard' },
  { id: 'profile', label: 'Profile', icon: FaUser, route: '/profile' },
  { id: 'beneficiary', label: 'Beneficiary', icon: FaUserFriends, route: '/beneficiary' },
  { id: 'hospitals', label: 'Hospitals', icon: FaHospital, route: '/hospitals' },
  { id: 'appointments', label: 'Appointments', icon: FaCalendarCheck, route: '/appointments' },
  { id: 'consent', label: 'Consent', icon: FaFileContract, route: '/consent' },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <MotionDiv
      className="sticky hidden h-screen max-w-64 bg-white border-r border-primary-3 md:flex flex-col overflow-y-auto"
      initial={{ width: 256, opacity: 0 }}
      animate={{ 
        width: isCollapsed ? 64 : 256,
        opacity: 1
      }}
      transition={{ duration: 0.3 }}
      variants={containerVariants}
    >
      <MotionDiv variants={itemVariants} className="p-4 self-end cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <IoIosArrowForward className="text-red-800 text-2xl" />
        ) : (
          <IoIosArrowBack className="text-red-800 text-2xl" />
        )}
      </MotionDiv>
      {sidebarItems.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <MotionDiv key={item.id} variants={itemVariants}>
            <Link href={item.route} passHref>
              <MotionDiv
                className={`flex items-center mb-2 mx-2 rounded-lg cursor-pointer py-4 h-16 ${
                  isActive ? 'bg-red-600 text-white' : 'text-red-800 hover:bg-red-100'
                } ${isCollapsed ? 'justify-center' : 'px-3'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(item.route)}
              >
                <item.icon className={`text-xl ${isCollapsed ? 'mx-0' : 'mr-3'}`} />
                {!isCollapsed && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </MotionDiv>
            </Link>
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
};

export default Sidebar;
