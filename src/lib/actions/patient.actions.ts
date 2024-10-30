"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Patient } from "../models/patient.model";
import { User } from "../models/user.model";
import { Appointment } from "../models/appointment.model";
import { NextResponse } from "next/server";

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
    if (!nominee) {
      return { message: "Nominee not found", status: 404, success: false };
    }

    const patient = await Patient.findById(user.patientId);
    if (!patient) {
      return { message: "Patient not found", status: 404, success: false };
    }

    const NomineeID = nominee._id.toString();
    const NomineeContact = nominee.phone.toString();

    if (patient.nominees.includes(NomineeID)) {
      return { message: "This person is already a nominee", status: 400, success: false };
    }

    if (patient.emergencyContacts.includes(NomineeContact)) {
      return { message: "This contact number is already registered", status: 400, success: false };
    }

    patient.nominees.push(NomineeID);
    patient.emergencyContacts.push(NomineeContact);
    await patient.save();

    revalidatePath(`/profile/${patientId}`);
    return { message: "Nominee added successfully", status: 200, success: true };
  }
  catch (error: any) {
    return { message: error.message, status: 500, success: false };
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
