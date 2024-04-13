import { revalidatePath } from "next/cache";
import { Patient } from "../models/patient.model";
import { connectToDB } from "../mongoose";
import { User } from "../models/user.model";
import { Doctor } from "../models/doctor.model";
import { Appointment } from "../models/appointment.model";
import { Hospital } from "../models/hospital.model";

interface Params {
  clerkId: string;
  nominees?: string[];
  emergencyContacts?: string[];
  bloodGroup?: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
  path: string;
}

// update patient
export async function updateUserProfile(params: Params) {
  try {
    connectToDB();

    await Patient.findOneAndUpdate({ clerkId: params.clerkId }, { params });
    revalidatePath(params.path);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function checkIfNominee(patientId: string, currUser: string) {
  try {
    connectToDB();

    const user = await User.findById(patientId);
    if (!user) {
      throw new Error("Patient not found");
    }

    const patient = await Patient.findOne({ clerkId: user.role });

    const isNominee = patient.nominees.includes(currUser);
    return isNominee;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

interface IAppointment {
  patient: string;
  doctor: string;
  hospital: string;
  date: string;
  time: string;
  status: string;
}
export async function addAppointment(params: IAppointment) {
  try {
    connectToDB();
    const newAppointment = await Appointment.create(params);
    const doctor = await Doctor.findOne({ clerkId: params.doctor });
    doctor.patients.push(params.patient);
    const hospital = await Hospital.findOne({ clerkId: params.hospital });
    hospital.patients.push(params.patient);
    return newAppointment;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
