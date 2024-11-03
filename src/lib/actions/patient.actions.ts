"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { Patient } from "../models/patient.model";
import { User } from "../models/user.model";
import { Appointment } from "../models/appointment.model";
import { NextResponse } from "next/server";
import { getAppointmentById } from "./appointment.action";

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

    // Get current user
    const currentUser = await User.findById(patientId);
    if (!currentUser) {
      return { message: "Current user not found", status: 404, success: false };
    }

    // Get nominee user by username
    const nominee = await User.findOne({ username: nomineeUserName });
    if (!nominee) {
      return { message: "Nominee not found", status: 404, success: false };
    }

    // Get current user's patient record
    const currentPatient = await Patient.findById(currentUser.patientId);
    if (!currentPatient) {
      return { message: "Patient not found", status: 404, success: false };
    }

    // Get nominee's patient record
    const nomineePatient = await Patient.findById(nominee.patientId);
    if (!nomineePatient) {
      return {
        message: "Nominee's patient record not found",
        status: 404,
        success: false,
      };
    }

    const NomineeID = nominee._id.toString();
    const NomineeContact = nominee.phone.toString();

    // Check if already a nominee
    if (currentPatient.nominees.includes(NomineeID)) {
      return {
        message: "This person is already a nominee",
        status: 400,
        success: false,
      };
    }

    // Check if contact already registered
    if (currentPatient.emergencyContacts.includes(NomineeContact)) {
      return {
        message: "This contact number is already registered",
        status: 400,
        success: false,
      };
    }

    // Add nominee to current patient's nominees
    currentPatient.nominees.push(NomineeID);
    currentPatient.emergencyContacts.push(NomineeContact);
    await currentPatient.save();

    // Add current user as beneficiary to nominee's patient record
    nomineePatient.beneficiary.push(currentUser._id);
    await nomineePatient.save();

    revalidatePath(`/profile/${patientId}`);
    return {
      message: "Nominee added successfully",
      status: 200,
      success: true,
    };
  } catch (error: any) {
    return { message: error.message, status: 500, success: false };
  }
}

export async function returnAllConsentsRequired(userId: string) {
  try {
    connectToDB();

    const user = await User.findById(userId);
    if (!user) {
      return { message: "User not found", status: 404, success: false };
    }

    const patient = await Patient.findById(user.patientId);
    if (!patient) {
      return { message: "Patient not found", status: 404, success: false };
    }

    const beneficiary = patient.beneficiary;
    if (beneficiary.length === 0) {
      return { message: "No beneficiaries found", status: 404, success: false };
    }

    const beneficiaryUsers = await User.find({ _id: { $in: beneficiary } });

    const beneficiaryPatients: any[] = [];
    for (const user of beneficiaryUsers) {
      const patient = await Patient.findById(user.patientId);
      beneficiaryPatients.push(patient);
    }

    const allAppointments: any[] = [];
    for (const patient of beneficiaryPatients) {
      if (patient?.appointments && Array.isArray(patient.appointments)) {
        allAppointments.push(...patient.appointments);
      }
    }

    if (allAppointments.length === 0) {
      return { message: "No appointments found", status: 404, success: false };
    }

    const consentRequired: any[] = [];

    for (const appointmentId of allAppointments) {
      const appointmentDetails = await getAppointmentById(appointmentId);
      if (appointmentDetails?.consentRequest && !appointmentDetails?.consent) {
        consentRequired.push(appointmentDetails._id.toString());
      }
    }

    return consentRequired;
  } catch (error: any) {
    throw new Error(`Failed to check if consent needed: ${error.message}`);
  }
}
