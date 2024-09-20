"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Hospital } from "../models/hospital.model";

export async function getHospitalById(hospitalId: string) {
  try {
    connectToDB();
    const hospital = await Hospital.findById(hospitalId);
    return hospital;
  } catch (error: any) {
    throw new Error(`Failed to fetch hospital: ${error.message}`);
  }
}

export async function getHospitalsByLocation(location: string) {
  try {
    connectToDB();
    const hospitals = await Hospital.find({ $or: [{ city: location }, { state: location }] });
    return hospitals;
  } catch (error: any) {
    throw new Error(`Failed to fetch hospitals: ${error.message}`);
  }
}

