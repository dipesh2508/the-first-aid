import { revalidatePath } from "next/cache";
import { Doctor } from "../models/doctor.model";
import { connectToDB } from "../mongoose";

interface Params {
  clerkId: string;
  qualifications?: string[];
  specializations?: string[];
  hospitals?: string[];
  patients?: string[];
  path: string;
  appointments?: string[];
}

// update patient
export async function updateUserProfile(params: Params) {
  try {
    connectToDB();

    await Doctor.findOneAndUpdate({ clerkId: params.clerkId }, { params });
    revalidatePath(params.path);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
