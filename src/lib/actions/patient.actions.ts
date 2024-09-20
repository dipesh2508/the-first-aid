"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Patient } from "../models/patient.model";

export async function getPatientById(patientId: string) {
  try {
    connectToDB();
    const patient = await Patient.findById(patientId);
    return patient;
  } catch (error: any) {
    throw new Error(`Failed to fetch patient: ${error.message}`);
  }
}