"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ChangeEvent, use, useState } from "react";
import { updateUserProfile } from "@/lib/actions/patient.actions";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { patientValidation } from "@/lib/validations/patient";
import { IPatient } from "@/lib/models/patient.model";
import { useToast } from "@/components/ui/use-toast";

const PatientDetails = ({ patient }: any) => {
  console.log(patient, "patient");
  const { toast } = useToast();

  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(patientValidation),
    defaultValues: {
      clerkId: patient.clerkId,
      nominees: patient?.nominees || [], // Assuming patient is defined elsewhere
      emergencyContacts: patient?.emergencyContacts || [],
      bloodGroup: patient?.bloodGroup || "",
      allergies: patient?.allergies || [],
      medicalConditions: patient?.medicalConditions || [],
      medications: patient?.medications || [],
      surgeries: patient?.surgeries || [],
    },
  });
  const onSubmit = async (values: z.infer<typeof patientValidation>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await updateUserProfile(patient.clerkId, {
      nominees: values.nominees,
      emergencyContacts: values.emergencyContacts,
      bloodGroup: values.bloodGroup,
      allergies: values.allergies,
      medicalConditions: values.medicalConditions,
      medications: values.medications,
      surgeries: values.surgeries,
      path: pathname,
    });
    console.log("working");
  };
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    fieldName: keyof IPatient
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = e.currentTarget.value.trim();

      if (inputValue) {
        const fieldValues = form.getValues()[fieldName] as string[];

        // Custom validation for specific fields
        if (fieldName === "nominees" && inputValue.length > 15) {
          return form.setError(fieldName, {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }

        // Check if the tag already exists
        if (!fieldValues.includes(inputValue)) {
          form.setValue(fieldName, [...fieldValues, inputValue]);
          form.clearErrors(fieldName);
        }

        e.currentTarget.value = "";
      } else {
        form.trigger();
      }
    }
  };
  const handleTagRemove = (tag: string, fieldName: keyof IPatient) => {
    const fieldValues = form.getValues()[fieldName] as string[];
    const newFieldValues = fieldValues.filter((t) => t !== tag);
    if (form.setValue) {
      form.setValue(fieldName, newFieldValues);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-4 bg-primary-1 shadow-xl px-12 py-8 rounded-lg w-full"
        >
          <FormField
            control={form.control}
            name="nominees"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  nominees
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add nominees .."
                      onKeyDown={(e) => handleInputKeyDown(e, "nominees")}
                    />
                    {field.value.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() => handleTagRemove(tag, "nominees")}
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 nominees . You need to press enter to add a
                  nomine.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emergencyContacts"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Emergency Contacts
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add Emergency Contacts .."
                      onKeyDown={(e) =>
                        handleInputKeyDown(
                          e,

                          "emergencyContacts"
                        )
                      }
                    />
                    {field.value.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() =>
                              handleTagRemove(tag, "emergencyContacts")
                            }
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 nominees . You need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bloodGroup"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-slate-900">Blood Group</FormLabel>
                <FormControl className="text-base-semibold flex-1 text-primary-9">
                  <Input
                    type="text"
                    className="account-form_input no focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Allergies
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add allergies .."
                      onKeyDown={(e) => handleInputKeyDown(e, "allergies")}
                    />
                    {field?.value?.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() => handleTagRemove(tag, "allergies")}
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 allergies . You need to press enter to add a
                  nomine.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicalConditions"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Medical Conditions
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add medicalConditions .."
                      onKeyDown={(e) =>
                        handleInputKeyDown(e, "medicalConditions")
                      }
                    />
                    {field.value.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() =>
                              handleTagRemove(tag, "medicalConditions")
                            }
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 medicalConditions . You need to press enter to add
                  a nomine.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medications"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  medications
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add Emergency Contacts .."
                      onKeyDown={(e) =>
                        handleInputKeyDown(
                          e,

                          "medications"
                        )
                      }
                    />
                    {field.value.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() => handleTagRemove(tag, "medications")}
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 medications . You need to press enter to add a
                  tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surgeries"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  surgeries
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className="account-form_input no focus"
                      placeholder="Add surgeries .."
                      onKeyDown={(e) =>
                        handleInputKeyDown(
                          e,

                          "surgeries"
                        )
                      }
                    />
                    {field.value.length > 0 && (
                      <div className="flex  mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Button
                            key={tag}
                            className="bg-primary-5  flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize "
                            onClick={() => handleTagRemove(tag, "surgeries")}
                          >
                            {tag}
                            <span className="text-black hover:text-primary-5">
                              X
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 3 surgeries . You need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" variant="default">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PatientDetails;
