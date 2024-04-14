import * as z from "zod";
export const patientValidation = z.object({
  nominees: z.array(z.string()),
  emergencyContacts: z.array(z.string()),
  bloodGroup: z.string().optional(),
  allergies: z.array(z.string()),
  medicalConditions: z.array(z.string()),
  medications: z.array(z.string()),
  surgeries: z.array(z.string()),
});
