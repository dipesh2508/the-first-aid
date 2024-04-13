import mongoose from "mongoose";

export interface IDoctor {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  specializations: string[];
  hospitals: string[];
  patients: string[];
  mpin?: number;
  aadhar?: string;
}

const DoctorSchema = new mongoose.Schema<IDoctor>(
  {
    clerkId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    specializations: [
      {
        type: String,
      },
    ],
    hospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    mpin: {
      type: Number,
    },
    aadhar: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Doctor =
  mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);
