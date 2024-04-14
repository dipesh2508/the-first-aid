"use server";
import { revalidatePath } from "next/cache";
import { Patient } from "../models/patient.model";
import { connectToDB } from "../mongoose";
import { User } from "../models/user.model";
import { Doctor } from "../models/doctor.model";
import { Appointment } from "../models/appointment.model";
import { Hospital } from "../models/hospital.model";

interface Params {
  nominees?: string[];
  emergencyContacts?: string[];
  bloodGroup?: string;
  allergies?: string[];
  medicalConditions?: string[];
  medications?: string[];
  surgeries?: string[];
  path?: string;
}

//create a patient
export async function createPatient(clerkId: string, params: Params) {
  try {
    connectToDB();
    const newPatient = await Patient.create(params);
    const user = await User.findOne({ clerkId });
    user.role = newPatient._id;
    user.roleType = "patient";
    user.save();
    return newPatient;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

// update patient
export async function updateUserProfile(clerkId: string, params: Params) {
  try {
    connectToDB();

    await Patient.findOneAndUpdate({ clerkId }, { params });
    revalidatePath(params.path || "");
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
  doctor: string | null;
  hospital: string;
  date: string;
  time: string;
  status: string;
  appointmentType: string;
  emergencyType: string;
}
export async function addAppointment(params: IAppointment) {
  try {
    connectToDB();
    const newAppointment = await Appointment.create(params);
    if (!params.doctor) {
      throw new Error("Doctor id is null in addApointment function");
    }
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

// raise a appointment
export async function raiseAppointment(params: IAppointment) {
  try {
    connectToDB();
    const newAppointment = await Appointment.create({
      patient: params.patient,
      hospital: params.hospital,
      date: params.date,
      time: params.time,
      status: "pending",
      appointmentType: params.appointmentType,
      emergencyType: params.emergencyType,
    });
    return newAppointment;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

// //fetch patient by patient id
// export async function getPatientById(patientId: string) {
//   try {
//     connectToDB();
//     const user = await User.aggregate([
//       {
//         $match: {
//           clerkId: patientId,
//         },
//       },
//       {
//         $lookup: {
//           from: "patients",
//           localField: "role",
//           foreignField: "_id",
//           as: "patient",
//         },
//       },
//     ]);
//     if (!user) {
//       throw new Error("Patient not found");
//     }
//     return user;
//   } catch (error: any) {
//     console.log(error);
//     throw error;
//   }
// }

//fetch patient by patient id
export async function getPatientById(patientId: string) {
  try {
    connectToDB();
    const user = await Patient.findById(patientId);
    if (!user) {
      throw new Error("Patient not found");
    }
    return user;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

//verify consent

export async function verifyConsent(
  patientId: string,
  appointmentId: string,
  mpin: string
) {
  try {
    connectToDB();
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    const inNominee = await Patient.aggregate([
      {
        $match: {
          _id:patientId,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "nominees",
          foreignField: "_id",
          as: "nominee",
        },
      },
      {
        $match: {
          "nominee.mpin": mpin,
        },
      },
    ]);

    if (inNominee.length > 0) {
      appointment.status = "approved";
      appointment.save();
    }

    return appointment;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
