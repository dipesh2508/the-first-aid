"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Patient } from "../models/patient.model";
import { User } from "../models/user.model";
import { Appointment } from "../models/appointment.model";

export async function getPatientById(patientId: string) {
  try {
    connectToDB();
    const patient = await Patient.findById(patientId);
    return patient;
  } catch (error: any) {
    throw new Error(`Failed to fetch patient: ${error.message}`);
  }
}

export async function addNominee(patientId: string, nomineeUserName: string) {
  try {
    connectToDB();
    const user = await User.findById(patientId);
    const nominee = await User.findOne({username: nomineeUserName});
    console.log(nominee);
    if (!nominee) {
      throw new Error("Nominee not found");
    }

    const patient = await Patient.findById(user.patientId);
    console.log(patient);
    if (!patient) {
      throw new Error("Patient not found");
    }

    const NomineeID = nominee._id.toString();
    patient.nominees.push(NomineeID);
    await patient.save();



    revalidatePath(`/profile/${patientId}`);
    return patient;
  }
  catch (error: any) {
    throw new Error(`Failed to add nominee: ${error.message}`);
  }
}

export async function checkIfConsentNeeded(patientId: string) {
  try {
    connectToDB();
    const patient = await Patient.findById(patientId);
    if (!patient) {
      throw new Error("Patient not found");
    }

    const nominees = patient.nominees;
    if (!nominees || nominees.length === 0) {
      return false; // No nominees, so no consent needed
    }

    const appointments = await Appointment.find({ patient: { $in: nominees } });
    
    return appointments.length > 0; // Consent needed if there are any appointments for nominees

  } catch(error: any) {
    throw new Error(`Failed to check if consent needed: ${error.message}`);
  }
}
