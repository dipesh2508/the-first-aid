import mongoose from "mongoose";

export interface IPatient {
  nominees: string[];
  emergencyContacts: string[];
  bloodGroup?: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
}

const PatientSchema = new mongoose.Schema<IPatient>(
  {
    nominees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    emergencyContacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    bloodGroup: {
      type: String,
    },
    allergies: [
      {
        type: String,
      },
    ],
    medicalConditions: [
      {
        type: String,
      },
    ],
    medications: [
      {
        type: String,
      },
    ],
    surgeries: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Patient =
  mongoose.models.Patient || mongoose.model("Patient", PatientSchema);
