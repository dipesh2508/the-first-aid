import mongoose from "mongoose";

export interface IUser {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  mpin?: number;
  aadhar?: string;
  role: mongoose.Schema.Types.ObjectId;
  roleType: string;
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
    mpin: {
      type: Number,
    },
    aadhar: {
      type: String,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient" || "Doctor",
    },
    roleType: {
      type: String,
      required: true,
      enum: ["doctor", "patient"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
