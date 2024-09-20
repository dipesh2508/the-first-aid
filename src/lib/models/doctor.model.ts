import mongoose from "mongoose";

export interface IDoctor {
  userId: string;
  qualifications: string[];
  specializations: string[];
  hospital: string;
  regId: string;
  patients: mongoose.Schema.Types.ObjectId[];
  appointments: mongoose.Schema.Types.ObjectId[];
}

const DoctorSchema = new mongoose.Schema<IDoctor>(
  {
    qualifications: [
      {
        type: String,
      },
    ],
    specializations: [
      {
        type: String,
      },
    ],
    hospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor =
  mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);
