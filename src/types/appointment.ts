export interface Appointment {
  _id: string;
  patient: {
    _id: string;
    name: string;
    age: number;
    gender: string;
    patientInfo: {
      allergies: string[];
      medicalConditions: string[];
      medications: string[];
      bloodGroup: string;
      bp: string;
    };
  };
  date: string;
  time: string;
  status: string;
  appointmentType: string;
  consent: boolean;
  treatmentType?: string;
} 