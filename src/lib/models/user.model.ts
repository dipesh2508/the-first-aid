import mongoose from "mongoose";

export interface IUser {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  nominees: string[];
  emergencyContacts: string[];
  bloodGroup?: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
  mpin?: number;
  aadhar?: string;
}

export const UserSchema = new mongoose.Schema<IUser>(
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
    nominees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    emergencyContacts: [
      {
        type: String,
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
    mpin: {
      type: Number,
    },
    aadhar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
