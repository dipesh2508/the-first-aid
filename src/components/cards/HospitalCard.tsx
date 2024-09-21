import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';
import { FaMapMarkerAlt, FaRoute, FaStar, FaHospital } from 'react-icons/fa';
import Link from 'next/link';

interface HospitalCardProps {
  image: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  reviewCount: number;
  type: string;
  services: string[];
  buttonText: string;
  id: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  image,
  name,
  address,
  distance,
  rating,
  reviewCount,
  type,
  services,
  buttonText,
  id,
}) => {

  return (
    <div className="hospital-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image src={image} alt={name} layout="fill" objectFit="cover" className="hospital-image" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-primary-9 mb-2">{name}</h2>
        <p className="flex items-center text-gray-600 mb-1">
          <FaMapMarkerAlt className="mr-2 text-primary-9" /> {address}
        </p>
        <p className="flex items-center text-gray-600 mb-1">
            <FaRoute className="mr-2 text-primary-9" /> {distance}
        </p>
        <p className="flex items-center text-gray-600 mb-1">
          <FaStar className="mr-2 text-yellow-400" /> {rating}/5 Rating ({reviewCount} Reviews)
        </p>
        <p className="flex items-center text-gray-600 mb-3">
          <FaHospital className="mr-2 text-primary-9" /> {type}
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary-9 mb-2">Facilities</h3>
          <ul className="list-disc list-inside text-gray-600">
            {services?.map((facility:string, index:number) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
        <Link href={`/hospitals/${id}`}>
        <button 
          className="w-full bg-primary-6 text-white py-2 rounded-md hover:bg-primary-7 transition duration-300"
          >
          {buttonText}
        </button>
          </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
