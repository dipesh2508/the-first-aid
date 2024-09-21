import React from 'react';
import ConsentFormAction from '@/components/forms/ConsentFormAction';

interface PatientInfo {
  name: string;
  age: number;
  id: string;
  accidentDetails: string;
}

interface SurgeryInfo {
  name: string;
  consultingDoctor: string;
  type: string;
  duration: string;
  risks: string;
}

interface GuardianInfo {
  name: string;
  relation: string;
  contactNumber: string;
}

interface ConsentFormProps {
  patientInfo: PatientInfo;
  date: string;
  time: string;
  surgeryInfo: SurgeryInfo;
  guardianInfo: GuardianInfo;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ patientInfo, date, time, surgeryInfo, guardianInfo }) => {
  return (
    <div className="consent-form bg-pink-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Emergency Surgery Consent Form</h1>
      
      <div className="hospital-info mb-6">
        <h2 className="text-2xl font-semibold text-red-700 mb-2">AIIMS Hospital, New Delhi</h2>
        <p className="text-gray-700">All India Institute of Medical Sciences</p>
        <p className="text-gray-700">Ansari Nagar, New Delhi - 110029</p>
        <p className="text-gray-700">Contact Number: (011) 26588500</p>
        <p className="text-gray-700">Emergency Helpline: (011) 26588700</p>
      </div>

      <div className="form-details mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Emergency Surgery Consent Form</h3>
        <p className="text-gray-700">Date: {date}</p>
        <p className="text-gray-700">Time: {time}</p>
      </div>

      <div className="patient-info mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Patient Information</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Patient Name: {patientInfo.name}</li>
          <li>Age: {patientInfo.age} years</li>
          <li>Patient ID: {patientInfo.id}</li>
          <li>Accident Details: {patientInfo.accidentDetails}</li>
        </ul>
      </div>

      <div className="surgery-info mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Proposed Surgery Information</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Surgery Name: {surgeryInfo.name}</li>
          <li>Consulting Doctor: {surgeryInfo.consultingDoctor}</li>
          <li>Surgery Type: {surgeryInfo.type}</li>
          <li>Expected Duration: {surgeryInfo.duration}</li>
          <li>Risks Involved: {surgeryInfo.risks}</li>
        </ul>
      </div>

      <div className="guardian-info mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Guardian Information</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Guardian Name: {guardianInfo.name}</li>
          <li>Relation to Patient: {guardianInfo.relation}</li>
          <li>Contact Number: {guardianInfo.contactNumber}</li>
        </ul>
      </div>

      <div className="consent-declaration mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Consent Declaration</h3>
        <p className="text-gray-700">
          I, {guardianInfo.name}, the legal guardian of {patientInfo.name}, give my informed consent for the above-mentioned surgery
          to be performed at AIIMS Hospital, New Delhi. I understand the urgency and necessity of the procedure and the
          potential risks involved. I authorize the medical team to proceed with the required emergency treatment as
          advised by the consulting doctor.
        </p>
      </div>

      <ConsentFormAction 
        patientName={patientInfo.name}
      />
    </div>
  );
};

export default ConsentForm;
