import ConsentPreviewCard from '@/components/cards/ConsentPreviewCard';
import { returnAllConsentsRequired } from '@/lib/actions/patient.actions';
import { fetchUserbyClerkId } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'
import MotionDiv from '@/components/animations/MotionDiv';

const ConsentPage = async () => {
    const user = await currentUser();
    if (!user) return null;
  
    const userInfo = await fetchUserbyClerkId(user.id);

    const consentRequired = await returnAllConsentsRequired(userInfo?._id);

  return (
    <div className="container mx-auto p-4 text-black max-h-screen h-[90vh] overflow-y-auto">
      {Array.isArray(consentRequired) && consentRequired.length > 0 ? (
        consentRequired.map((consent, index) => (
          <MotionDiv
            key={consent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ConsentPreviewCard appointmentId={consent} userId={userInfo?._id.toString()} />
          </MotionDiv>
        ))
      ) : (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full text-center"
        >
          <svg
            className="w-64 h-64 mb-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" stroke="#4ade80" strokeWidth="2" />
            <path
              d="M7 13l3 3 7-7"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">All Clear!</h2>
          <p className="text-gray-500">No consent forms are required at this time.</p>
        </MotionDiv>
      )}
    </div>
  );
};

export default ConsentPage;
