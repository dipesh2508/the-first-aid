"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Doctor } from "../models/doctor.model";

interface AddDoctorParams {
  name: string;
  qualifications: string[];
  specializations: string[];
  hospital: string;
  regId: string;
}

export async function addDoctor(params: AddDoctorParams) {
  try {
    connectToDB();

    const newDoctor = new Doctor({
      name: params.name,
      qualifications: params.qualifications,
      specializations: params.specializations,
      hospital: params.hospital,
      regId: params.regId,
      patients: [],
      appointments: [],
    });

    await newDoctor.save();

    revalidatePath('/doctors');
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: `Failed to add doctor: ${error.message}`
    };
  }
}

export async function getDoctorById(doctorId: string) {
  try {
    connectToDB();
    const doctor = await Doctor.findById(doctorId);
    return doctor
  } catch (error: any) {
    return {
      success: false,
      error: `Failed to get doctor: ${error.message}`
    };
  }
}