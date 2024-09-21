import mongoose from "mongoose";

interface IAppointment {
  patient: mongoose.Schema.Types.ObjectId;
  consultingDoctor: string;
  expectedDuration: string;
  surgeryType: string;
  riskInvolved: string;
  hospital: mongoose.Schema.Types.ObjectId;
  date: string;

  time: string;
  status: string;
  appointmentType: string;
  emergencyType?: string;
  consent: boolean;
}


const appointmentSchema = new mongoose.Schema<IAppointment>(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    consultingDoctor: {
      type: String,
      required: true,
    },
    expectedDuration: {
      type: String,
      required: true,
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Hospital",
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    appointmentType: {
      type: String,
      required: true,
      enum: ["emergency", "normal"],
      default: "normal",
    },
    emergencyType: {
      type: String,
      required: false,

      enum: ["accident", "heart attack", "stroke", "others"],
    },
    consent: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }

);

export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
