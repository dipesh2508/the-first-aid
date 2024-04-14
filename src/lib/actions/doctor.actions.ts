import { revalidatePath } from "next/cache";
import { Doctor } from "../models/doctor.model";
import { connectToDB } from "../mongoose";
import { Hospital } from "../models/hospital.model";

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

//all the doctors available in the hospital
export async function getAllDoctorsInHospital(hospitalId: string) {
  try {
    connectToDB();
    const doctors = await Hospital.aggregate([
      {
        $match: {
          clerkId: hospitalId,
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "doctors",
          foreignField: "_id",
          as: "doctors",
        },
      },
    ]);

    if (!doctors) {
      return null;
    }
    return doctors[0].doctors;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
