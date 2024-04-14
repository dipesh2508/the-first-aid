"use server";
import { Hospital } from "../models/hospital.model";
import { connectToDB } from "../mongoose";

//search hospital by name
export async function searchHospitalByName(hospitalName: string) {
  try {
    connectToDB();

    const hosptials = await Hospital.find({ name: hospitalName });
    if (!hosptials) {
      return null;
    }
    return hosptials;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
