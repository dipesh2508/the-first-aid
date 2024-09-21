import ConsentFormDoctor from '@/components/forms/ConsentFormDoctor';
import { getHospitalById } from '@/lib/actions/hospital.actions';
import React from 'react'

const page = async ({params}: {params: {id: string}}) => {
  const {id} = params;
  const hospital = await getHospitalById(id);

  if(!hospital) return null;

  const name = `${hospital?.name}`;
  const Id = `${hospital?._id.toString()}`;
  const address = `${hospital?.address}`;
  const phone = `${hospital?.phone}`;


  return (

    <div className='flex w-full items-center flex-col text-black justify-center min-h-screen bg-white py-6'>
      <h1 className='text-2xl font-bold'>Raise a Request</h1>
    <ConsentFormDoctor name={name} id={Id} address={address} phone={phone} />
    </div>


  )
}

export default page
