"use server";

import { connectToDB } from "../mongoose";
import { Appointment } from "../models/appointment.model";
import { revalidatePath } from "next/cache";
import { Doctor } from "../models/doctor.model";
import { fetchUserbyUsername } from "./user.actions";

interface CreateAppointmentParams {
  username: string;
  consultingDoctor: string;
  hospital: string;
  date: string;
  phone: string;
  time: string;
  appointmentType: "normal" | "emergency";
  emergencyType?: string;
}

export async function createAppointment(params: CreateAppointmentParams) {
  try {
    connectToDB();

    const patient = await fetchUserbyUsername(params.username);
    if (!patient) {
      throw new Error("Patient not found");
    }

    const newAppointment = new Appointment({
      patient: patient._id,
      consultingDoctor: params.consultingDoctor,
      hospital: params.hospital,
      date: params.date,
      time: params.time,
      phone: params.phone,
      appointmentType: params.appointmentType,
      emergencyType: params.emergencyType,
      status: "pending",
      consent: false,
    });

    await newAppointment.save();

    revalidatePath('/appointments');
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: `Failed to create appointment: ${error.message}`
    };
  }
}

export async function getDoctorsByHospital(hospitalId: string) {
  try {
    connectToDB();
    const doctors = await Doctor.find({ hospital: hospitalId });
    return doctors;
  } catch (error: any) {
    throw new Error(`Failed to fetch doctors: ${error.message}`);
  }
}