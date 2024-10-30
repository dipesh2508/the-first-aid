import { useUser } from '@clerk/nextjs';

import { currentUser } from '@clerk/nextjs/server';
import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { redirect } from "next/navigation";
import OnboardingForm from '@/components/forms/OnboardingForm';
import Image from 'next/image';
import logo from '@/assets/TheFirstAid.png';

const Page = async () => {
    const user = await currentUser();
    if (!user) return null;
  
    const userInfo = await fetchUserbyClerkId(user.id);
    if (userInfo?.onboarded) redirect("/dashboard");

    const userData =  {
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.emailAddresses[0].emailAddress || '',
        phone: user?.phoneNumbers[0].phoneNumber || '',
        username: user?.username || '',
        gender: '',
        mpin: '',
        aadhar: '',
        age: 0,
        address: '',
        bloodGroup: '',
        bp: 'Normal',
        allergies: '',
        medicalConditions: '',
        medications: '',
        surgeries: '',
      }

    return (
        <main className='min-h-screen bg-gradient-to-b from-primary-1/50 to-white py-10 w-full'>
            <div className='container max-w-3xl mx-auto px-4 w-full'>
                <div className='bg-card rounded-lg shadow-lg p-6 md:p-8'>
                    <div className='mb-8 text-center'>
                        <Image src={logo} alt="logo" className='mx-auto h-24 w-auto' />
                        <h1 className='text-3xl font-bold text-primary-9 mb-2'>Complete Your Profile</h1>
                        <p className='text-muted-foreground'>Please provide your information to get started</p>
                    </div>
                    <div className='flex flex-col gap-4 mx-auto'>
                        <OnboardingForm user={userData} clerkId={user.id} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page;

