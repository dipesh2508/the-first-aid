import mongoose from "mongoose";

export interface IUser {
  clerkId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  image: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
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
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
