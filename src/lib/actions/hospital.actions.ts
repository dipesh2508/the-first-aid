"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Hospital } from "../models/hospital.model";
import { Appointment } from "../models/appointment.model";
import { User } from "../models/user.model";
import { format } from 'date-fns';

export async function getAllHospitals() {

  try {

    connectToDB();
    const hospitals = await Hospital.find({});
    return hospitals;
  } catch (error: any) {
    throw new Error(`Failed to fetch hospitals: ${error.message}`);
  }
}


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
    const hospitals = await Hospital.find({
      address: { $regex: new RegExp(location, 'i') }
    });
    return hospitals;
  } catch (error: any) {
    throw new Error(`Failed to fetch hospitals: ${error.message}`);
  }
}