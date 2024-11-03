"use server";

import { connectToDB } from "../mongoose";
import { Appointment } from "../models/appointment.model";
import { revalidatePath } from "next/cache";
import { Doctor } from "../models/doctor.model";
import { fetchUserbyUsername } from "./user.actions";
import { NextResponse } from "next/server";
import { getPatientById } from "./patient.actions";
import { User } from "../models/user.model";

export async function getAppointmentById(id: string) {
  try {
    await connectToDB();
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    return {
      ...appointment.toObject(),
      _id: appointment._id.toString(),
      patient: appointment.patient.toString(),
      consultingDoctor: appointment.consultingDoctor.toString(),
      hospital: appointment.hospital.toString(),
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch appointment: ${error.message}`);
  }
}

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
      consentRequest: false,
    });

    await newAppointment.save();

    const patientSchema = await getPatientById(patient.patientId);

    if (patientSchema) {
      if (!patientSchema.appointments) {
        patientSchema.appointments = [];
      }
      
      patientSchema.appointments.push(newAppointment._id);
      await patientSchema.save();
    }

    revalidatePath("/appointments");
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      error: `Failed to create appointment: ${error.message}`,
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

export async function getAllAppointments() {
  try {
    connectToDB();
    const appointments = await Appointment.find();
    return appointments;
  } catch (error: any) {
    throw new Error(`Failed to fetch appointments: ${error.message}`);
  }
}

export async function getAppointmentsByUserId(userId: string) {
  try {
    connectToDB();
    const appointments = await Appointment.find({ patient: userId });
    return appointments;
  } catch (error: any) {
    throw new Error(`Failed to fetch appointments: ${error.message}`);
  }
}

export async function getAppointmentsByHospital(hospitalId: string) {
  try {
    connectToDB();
    const appointments = await Appointment.find({ hospital: hospitalId });
    return appointments;
  } catch (error: any) {
    throw new Error(`Failed to fetch appointments: ${error.message}`);
  }
}

export async function updateAppointmentConsent(
  appointmentId: string,
  consentData: {
    surgeryType: string;
    riskInvolved: string;
    treatmentType: string;
  }
) {
  try {
    connectToDB();

    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      {
        ...consentData,
        consentRequest: true,
      },
      { new: true }
    );

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    await appointment.save();

    revalidatePath("/appointments");
    return { success: true, appointment };
  } catch (error: any) {
    return {
      success: false,
      error: `Failed to update appointment consent: ${error.message}`,
    };
  }
}

export async function submitAppointmentConsent(
  userId: string,
  appointmentId: string,
  submittedMpin: number
) {
  try {
    connectToDB();
    
    const user = await User.findById(userId);
    console.log(user.mpin, submittedMpin);
    if (!user || user.mpin !== submittedMpin) {
      return { success: false, error: "Invalid MPIN" };
    }

    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { consent: true },
      { new: true }
    );

    if (!appointment) {
      return { success: false, error: "Appointment not found" };
    }

    revalidatePath("/appointments");
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: `Failed to submit consent: ${error.message}`,
    };
  }
}
