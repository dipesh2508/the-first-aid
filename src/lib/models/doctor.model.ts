import mongoose from "mongoose";

export interface IDoctor {
  qualifications: string[];
  specializations: string[];
  hospitals: string[];
  patients: string[];
  appointments: string[];
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
    hospitals: [
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
  },
  { timestamps: true }
);

export const Doctor =
  mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);
