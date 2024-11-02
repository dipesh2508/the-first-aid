"use client";

import React, { useEffect, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonLoader from "@/components/shared/ButtonLoader";
import { useToast } from "@/hooks/use-toast";
import { fetchUserAndPatientInfo } from "@/lib/actions/user.actions";
import {
  updateAppointmentConsent,
  getAppointmentById,
} from "@/lib/actions/appointment.action";
import { Textarea } from "@/components/ui/textarea";
import ConsentFormSkeleton from "../skeletons/ConsentFormSkeleton";

interface ConsentFormData {
  surgeryType: string;
  riskInvolved: string;
  treatmentType: string;
}

interface PatientInfo {
  name: string;
  age: number;
  gender: string;
  patientInfo: {
    bloodGroup: string;
    bp: string;
    allergies: string[];
    medicalConditions: string[];
    medications: string[];
  };
}



const ConsentForm = ({ appointmentId }: { appointmentId: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);

  const form = useForm<ConsentFormData>({
    defaultValues: {
      surgeryType: "",
      riskInvolved: "",
      treatmentType: "",
    },
  });

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const appointment = await getAppointmentById(appointmentId);
        const patientData = await fetchUserAndPatientInfo(appointment.patient);
        setPatientInfo(patientData);
      } catch (error) {
        console.error("Error fetching patient details:", error);
        toast({
          title: "Error",
          description: "Failed to fetch patient details",
          variant: "destructive",
        });
      }
    };

    fetchPatientDetails();
  }, [appointmentId, toast]);

  const onSubmit = async (data: ConsentFormData) => {
    setIsSubmitting(true);
    try {
      const result = await updateAppointmentConsent(appointmentId, data);
      if (result.success) {
        toast({
          title: "Consent Request Sent",
          description: "The consent request has been sent successfully!",
          variant: "default",
        });
        router.push("/appointments");
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during form submission",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!patientInfo) {
    return <ConsentFormSkeleton />;
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> {patientInfo.name}
            </p>
            <p>
              <strong>Age:</strong> {patientInfo.age}
            </p>
            <p>
              <strong>Gender:</strong> {patientInfo.gender}
            </p>
          </div>
          <div>
            <p>
              <strong>Blood Group:</strong> {patientInfo.patientInfo.bloodGroup}
            </p>
            <p>
              <strong>BP:</strong> {patientInfo.patientInfo.bp}
            </p>
            <p>
              <strong>Allergies:</strong>{" "}
              {patientInfo.patientInfo.allergies.join(", ") || "None"}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong>Medical Conditions:</strong>{" "}
            {patientInfo.patientInfo.medicalConditions.join(", ") || "None"}
          </p>
          <p>
            <strong>Current Medications:</strong>{" "}
            {patientInfo.patientInfo.medications.join(", ") || "None"}
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="surgeryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surgery Type</FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="treatmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment Type</FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="riskInvolved"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Risks Involved</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    required
                    placeholder="Please detail all potential risks"
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-6 text-white"
          >
            {isSubmitting && <ButtonLoader isLoading={isSubmitting} />}
            Send Consent Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ConsentForm;
