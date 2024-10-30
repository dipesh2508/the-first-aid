"use client";

import React, { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { submitOnboardingForm } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import ButtonLoader from "@/components/shared/ButtonLoader";
import { useToast } from "@/hooks/use-toast";


export interface OnboardingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  gender: string;
  age: number;
  address: string;
  mpin: string;
  aadhar: string;
  bloodGroup: string;
  bp: string;
  allergies: string;
  medicalConditions: string;
  medications: string;
  surgeries: string;
}

const OnboardingForm = ({ user, clerkId }: { user: OnboardingFormData, clerkId: string }) => {

  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OnboardingFormData>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      username: user.username,
      gender: user.gender,
      age: user.age,
      address: user.address,
      mpin: user.mpin,
      aadhar: user.aadhar,
      bloodGroup: user.bloodGroup,
      bp: user.bp,
      allergies: user.allergies,
      medicalConditions: user.medicalConditions,
      medications: user.medications,
      surgeries: user.surgeries,
    },
  });

  const onSubmit = async (data: OnboardingFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitOnboardingForm(clerkId, data);
      if (result.success) {
        toast({
          title: "Onboarding Complete",
          description: "Your profile has been successfully set up!",
          variant: "default",
        });
        router.push("/dashboard");
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong",
          variant: "destructive",
        });
        console.error("Form submission failed", result.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during form submission",
        variant: "destructive",
      });
      console.error("An error occurred during form submission", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-16 text-black">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                First Name <span className="text-red-500">*</span>
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Last Name <span className="text-red-500">*</span>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="email" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="tel" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Username <span className="text-red-500">*</span>
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
          name="age"
          rules={{
            min: {
              value: 18,
              message: "You must be at least 18 years old"
            },
            validate: (value) => value >= 18 || "You must be at least 18 years old"
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Age <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="number" required min="18" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Address <span className="text-red-500">*</span>
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Gender <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mpin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                MPIN <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="password" maxLength={4} required />
              </FormControl>
              <FormDescription>4-digit PIN for quick access</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aadhar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhar Number <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bloodGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Blood Group <span className="text-red-500">*</span>
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
          name="bp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blood Pressure</FormLabel>
              <FormControl>
                <select {...field} className="w-full p-2 border rounded">
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allergies</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medicalConditions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Conditions</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medications</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surgeries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surgeries</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Separate with commas" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="bg-primary-6 text-white">
          {isSubmitting && <ButtonLoader isLoading={isSubmitting} />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default OnboardingForm;
