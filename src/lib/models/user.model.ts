import mongoose from "mongoose";

export interface IUser {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  gender: string;
  image?: string;
  mpin?: number;
  aadhar?: string;
  patientId: mongoose.Schema.Types.ObjectId;
  isDoctor: boolean;
  doctorId?: mongoose.Schema.Types.ObjectId;
  onboarded: boolean;
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
      required: false,
      default: "",
    },
    mpin: {
      type: Number,
    },
    gender: {
      type: String,
      enum: [
        "male", "female"
      ]
    },
    aadhar: {
      type: String,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    onboarded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
