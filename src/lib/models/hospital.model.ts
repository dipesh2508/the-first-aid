import mongoose from "mongoose";

export interface IHospital {
  name: string;
  email: string;
  phone: string;
  image: string;
  address: string;
  city: string;
  state: string;
  doctors: mongoose.Schema.Types.ObjectId[];
  patients: mongoose.Schema.Types.ObjectId[];
  beds: number;
  type: string;
  icuBeds: number;
  oxygenBeds: number;
  ventilators: number;
  ambulances: number;
  services: string[];
}

const HospitalSchema = new mongoose.Schema<IHospital>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    beds: {
      type: Number,
      required: true,
      default: 0,
    },
    icuBeds: {
      type: Number,
      required: true,
      default: 0,
    },
    oxygenBeds: {
      type: Number,
      required: true,
      default: 0,
    },
    ventilators: {
      type: Number,
      required: true,
      default: 0,
    },
    ambulances: {
      type: Number,
      required: true,
      default: 0,
    },
    services: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital =
  mongoose.models.Hospital || mongoose.model("Hospital", HospitalSchema);
