import { revalidatePath } from "next/cache";
import { Patient } from "../models/patient.model";
import { connectToDB } from "../mongoose";
import { User } from "../models/user.model";

interface Params {
  clerkId: string;
  nominees?: string[];
  emergencyContacts?: string[];
  bloodGroup?: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
  path: string;
}

// update patient
export async function updateUserProfile(params: Params) {
  try {
    connectToDB();

    await Patient.findOneAndUpdate({ clerkId: params.clerkId }, { params });
    revalidatePath(params.path);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function checkIfNominee(patientId: string, currUser: string) {
  try {
    connectToDB();

    const user = await User.findById(patientId);
    if (!user) {
      throw new Error("Patient not found");
    }

    const patient = await Patient.findOne({ clerkId: user.role });

    const isNominee = patient.nominees.includes(currUser);
    return isNominee;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
