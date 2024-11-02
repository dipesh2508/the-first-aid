'use client'

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IHospital } from '@/lib/models/hospital.model';
import { Button } from '../ui/button';
import MotionDiv from '../animations/MotionDiv';

interface Props {
  hospitals: IHospital[];
}

const HospitalSelector = ({ hospitals }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentHospital = searchParams.get('hospital');

  const handleHospitalChange = (hospitalId: string) => {
    router.push(`/admin/dashboard?hospital=${hospitalId}`);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/3">
          <label htmlFor="hospital" className="block text-sm font-medium mb-2 text-primary-9">
            Select Hospital
          </label>
          <select
            id="hospital"
            className="w-full p-2 border rounded-md border-primary-3 focus:ring-2 focus:ring-primary-6"
            value={currentHospital || ''}
            onChange={(e) => handleHospitalChange(e.target.value)}
          >
            <option value="">All Hospitals</option>
            {hospitals.map((hospital) => (
              <option key={hospital._id.toString()} value={hospital._id.toString()}>
                {hospital.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="border-primary-6 text-primary-9"
            onClick={() => router.push('/admin/dashboard')}
          >
            Reset Filter
          </Button>
        </div>
      </div>
    </MotionDiv>
  );
};

export default HospitalSelector; 