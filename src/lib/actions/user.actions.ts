"use server"

import { User } from "../models/user.model";
import { Patient } from "../models/patient.model";
import { connectToDB } from "../mongoose";
import { OnboardingFormData } from "@/components/forms/OnboardingForm";

export async function fetchUserbyClerkId(userId: string) {
  try {
    connectToDB();

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);

  }
}

export async function fetchUserbyUsername(username: string) {
  try {
    connectToDB();
    const user = await User.findOne({ username });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    const user = await User.findById(userId);
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchUserNamesById(userIds: string[]) {
  try {
    connectToDB();

    const users = await User.find({ _id: { $in: userIds } });
    return users.map((user) => user.name);
  } catch (error: any) {
    throw new Error(`Failed to fetch user names: ${error.message}`);
  }
}

export async function submitOnboardingForm(clerkId: string, formData: OnboardingFormData) {
  try {
    await connectToDB();

    // Find or create User
    let user = await User.findOne({ clerkId });

    if (!user) {
      // Create new user if not found
      user = new User({
        clerkId,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        username: formData.username,
        gender: formData.gender,
        age: formData.age,
        address: formData.address,
        mpin: formData.mpin,
        aadhar: formData.aadhar,
        onboarded: true,
      });
    } else {
      // Update existing user
      user.name = `${formData.firstName} ${formData.lastName}`;
      user.email = formData.email;
      user.phone = formData.phone;
      user.username = formData.username;
      user.gender = formData.gender;
      user.mpin = formData.mpin;
      user.aadhar = formData.aadhar;
      user.age = formData.age;
      user.address = formData.address;
      user.onboarded = true;

    }

    await user.save();

    // Create or update Patient model
    const patientData: any = {
      clerkId,
      name: `${formData.firstName} ${formData.lastName}`,
      bloodGroup: formData.bloodGroup,
      bp: formData.bp,
    };

    if (formData.allergies) {
      patientData.allergies = formData.allergies.split(',').map((item: string) => item.trim()).filter(Boolean);
    }

    if (formData.medicalConditions) {
      patientData.medicalConditions = formData.medicalConditions.split(',').map((item: string) => item.trim()).filter(Boolean);
    }

    if (formData.medications) {
      patientData.medications = formData.medications.split(',').map((item: string) => item.trim()).filter(Boolean);
    }

    if (formData.surgeries) {
      patientData.surgeries = formData.surgeries.split(',').map((item: string) => item.trim()).filter(Boolean);
    }

    const updatedPatient = await Patient.findOneAndUpdate(
      { clerkId },
      patientData,
      { new: true, upsert: true, runValidators: true }
    );

    // Link Patient to User if not already linked
    if (!user.patientId) {
      user.patientId = updatedPatient._id;
      await user.save();
    }

    return { success: true, user, patient: updatedPatient };
  } catch (error: any) {
    console.error("Failed to submit onboarding form:", error);
    return { success: false, error: error.message };
  }
}

export async function fetchUserBasicInfo(userId: string) {
  try {
    connectToDB();
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Return only serialized basic information
    return {
      _id: user._id.toString(),
      name: user.name,
      age: user.age,
      gender: user.gender
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch user basic info: ${error.message}`);
  }
}

export async function fetchUserAndPatientInfo(userId: string) {
  try {
    connectToDB();
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Fetch patient data using patientId from user
    const patient = await Patient.findById(user.patientId);
    
    if (!patient) {
      throw new Error('Patient record not found');
    }

    // Return serialized user and patient information
    return {
      _id: user._id.toString(),
      name: user.name,
      age: user.age,
      gender: user.gender,
      patientInfo: {
        _id: patient._id.toString(),
        allergies: patient.allergies || [],
        medicalConditions: patient.medicalConditions || [],
        medications: patient.medications || [],
        bloodGroup: patient.bloodGroup,
        bp: patient.bp
      }
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch user and patient info: ${error.message}`);
  }
}