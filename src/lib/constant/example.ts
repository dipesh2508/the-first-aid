export interface IProfile {
  name: string;
  phone: string;
  email: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  nominees: string[];
  emergencyContacts: string[];
}

export interface IMedicalData {
    bloodGroup: string;
    allergies: string[];
    medicalHistory: string[];
    medications: string[];
    surgeries: string[];
}

export const ProfileData: IProfile = {
  name: "John Doe",
  phone: "1234567890",
  email: "john.doe@gmail",
  gender: "male",
  address: "123, Main Street, New York",
  dateOfBirth: "01-01-1990",
  nominees: ["Jane Doe", "Alice Doe"],
  emergencyContacts: ["1234567890", "0987654321"],
};

export const MedicalData: IMedicalData = {
  bloodGroup: "O+",
  allergies: ["Peanuts", "Dust"],
  medicalHistory: ["Diabetes", "Hypertension"],
  medications: ["Insulin", "Aspirin"],
  surgeries: ["Appendix", "Tonsils"],
};