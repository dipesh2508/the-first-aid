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
import { getAllHospitals } from "@/lib/actions/hospital.actions";
import { addDoctor } from "@/lib/actions/doctor.actions";

interface Hospital {
  _id: string;
  name: string;
}

interface AddDoctorFormData {
  name: string;
  qualifications: string;
  specializations: string;
  hospital: string;
  regId: string;
}

const AddDoctorForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const form = useForm<AddDoctorFormData>({
    defaultValues: {
      name: "",
      qualifications: "",
      specializations: "",
      hospital: "",
      regId: "",
    },
  });

  useEffect(() => {
    const fetchHospitals = async () => {
      const hospitalsList = await getAllHospitals();
      setHospitals(hospitalsList);
    };
    fetchHospitals();
  }, []);

  const onSubmit = async (data: AddDoctorFormData) => {
    setIsSubmitting(true);
    try {
      // Convert comma-separated strings to arrays
      const formattedData = {
        ...data,
        qualifications: data.qualifications.split(',').map(q => q.trim()),
        specializations: data.specializations.split(',').map(s => s.trim()),
      };

      const result = await addDoctor(formattedData);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Doctor added successfully!",
          variant: "default",
        });
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
        description: "Failed to add doctor",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-16 text-black">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Qualifications <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specializations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Specializations <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hospital"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Hospital <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Hospital</option>
                  {hospitals?.map((hospital) => (
                    <option key={hospital._id} value={hospital._id}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="regId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Registration ID <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="bg-primary-6 text-white">
          {isSubmitting && <ButtonLoader isLoading={isSubmitting} />}
          Add Doctor
        </Button>
      </form>
    </Form>
  );
};

export default AddDoctorForm;
