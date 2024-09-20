
import { useUser } from '@clerk/nextjs';

import { currentUser } from '@clerk/nextjs/server';
import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { redirect } from "next/navigation";
import OnboardingForm from '@/components/forms/OnboardingForm';


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
        bloodGroup: '',
        bp: 'Normal',
        allergies: '',
        medicalConditions: '',
        medications: '',
        surgeries: '',
      }

    return (
        <main className='flex flex-col items-center justify-center min-h-screen w-full px-24'>

        <OnboardingForm user={userData} clerkId={user.id} />
        </main>
    )
}

export default Page;



