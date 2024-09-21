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
    const hospitals = await Hospital.find({city: location});
    return hospitals;
  } catch (error: any) {
    throw new Error(`Failed to fetch hospitals: ${error.message}`);
  }
}


export async function createConsent(formData: FormData, hospitalId: string) {
  try {
    connectToDB();

    const patientUsername = formData.get('patientUsername') as string;
    const patient = await User.findOne({ username: patientUsername });

    if (!patient) {
      throw new Error('Patient not found');
    }

    const now = new Date();
    const consent = new Appointment({
      patient: patient._id,
      consultingDoctor: formData.get('consultingDoctor'),
      expectedDuration: formData.get('expectedDuration'),
      surgeryType: formData.get('surgeryType'),
      riskInvolved: formData.get('riskInvolved'),
      hospital: hospitalId,
      date: format(now, 'MM/dd/yyyy'),
      time: format(now, 'HH:mm:ss'),
      status: 'pending',
      appointmentType: 'normal',
      consent: true,
    });

    await consent.save();

    revalidatePath(`/hospitals/${hospitalId}`);
    return consent;
  } catch (error: any) {
    throw new Error(`Failed to create consent: ${error.message}`);
  }
}