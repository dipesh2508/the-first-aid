import mongoose from "mongoose";

enum BP {
  HIGH = "High",
  LOW = "Low",
  NORMAL = "Normal",
}

export interface IPatient {
  clerkId: string;
  nominees: string[];
  beneficiary: string[];
  emergencyContacts: string[];
  bloodGroup: string;
  bp: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
}

const PatientSchema = new mongoose.Schema<IPatient>(
  {
    clerkId: {
      type: String,
    },
    nominees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    beneficiary: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    emergencyContacts: [
      {
        type: String,
        required: false,
      },
    ],
    bp: {
      type: String,
      enum: BP,
      default: BP.NORMAL,
    },
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
