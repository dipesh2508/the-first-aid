import ConsentForm from '@/components/forms/ConsentForm'
import React from 'react'

const ConsentPage = () => {
  const demoProps = {
    patientInfo: {
      name: "Ravi Kumar",
      age: 32,
      id: "AIIMS56789123",
      accidentDetails: "Ravi Kumar was brought to AIIMS following a severe road accident near Connaught Place. He is currently in a critical condition and requires immediate surgical intervention to address internal injuries."
    },
    date: "21/09/2024",
    time: "04:30 PM",
    surgeryInfo: {
      name: "Emergency Abdominal Surgery (Laparotomy)",
      consultingDoctor: "Dr. A. K. Sharma",
      type: "Life-Saving, Emergency Procedure",
      duration: "3-4 hours",
      risks: "The surgery carries risks including infection, bleeding, and potential damage to surrounding organs. However, this procedure is critical to saving the patient's life."
    },
    guardianInfo: {
      name: "Suresh Kumar",
      relation: "Brother",
      contactNumber: "+91 9876543210"
    }
  };

  return (
    <div className="container mx-auto p-4 text-black max-h-screen h-[90vh] overflow-y-auto">
      <ConsentForm {...demoProps} />
    </div>

  );
};

export default ConsentPage;