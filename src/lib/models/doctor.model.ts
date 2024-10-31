import mongoose from "mongoose";

export interface IDoctor {
  name: string;
  qualifications: string[];
  specializations: string[];
  hospital: mongoose.Schema.Types.ObjectId;
  regId: string;
  patients: mongoose.Schema.Types.ObjectId[];
  appointments: mongoose.Schema.Types.ObjectId[];
}

const DoctorSchema = new mongoose.Schema<IDoctor>(
  {
    name: {
      type: String,
      required: true,
    },
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
    regId: {
      type: String,
      required: true,
      unique:true,
    },
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
