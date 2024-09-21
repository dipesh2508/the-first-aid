"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createConsent } from "@/lib/actions/hospital.actions";
import { useRouter } from "next/navigation";
import { format } from 'date-fns';

export default function ConsentFormDoctor({name, id, address, phone}: {name: string, id: string, address: string, phone: string}) {
  const [formData, setFormData] = useState({
    patientUsername: "",
    surgeryName: "",
    expectedDuration: "",
    consultingDoctor: "",
    riskInvolved: "",
    surgeryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const currentDateTime = format(new Date(), 'MM/dd/yyyy HH:mm');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const result = await createConsent(formDataToSubmit, id);
      console.log("Consent created:", result);
      router.push(`/hospitals/${id}`); // Redirect to hospital page or wherever appropriate
    } catch (error: any) {
      console.error("Failed to create consent:", error);
      setError(error.message || "Failed to create consent. Please try again.");
    } finally {
      setIsSubmitting(false);
      router.push(`/hospitals/${id}`);
    }
  };

  return (
    <div className="min-h-screen   p-8 flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full border-2 border-red-200"
      >
        <div className="mb-6 border-b-2 border-red-200 pb-4">
          <h1 className="text-2xl font-bold text-red-600 mb-1">
            {name}
          </h1>
          <p className="text-sm text-gray-600">
            {address}
          </p>
          <p className="text-xs text-gray-500">Contact Number: {phone}</p>
          <p className="text-sm text-red-600 mt-2">
            Date and Time: {currentDateTime}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            Patient Information
          </h2>
          <div className=" p-2 rounded border border-red-200">
            <Label
              htmlFor="patientUsername"
              className="text-sm font-medium text-gray-700"
            >
              Patient Username
            </Label>
            <Input
              id="patientUsername"
              name="patientUsername"
              value={formData.patientUsername}
              onChange={handleInputChange}
              className="mt-1 border-red-200"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            Proposed Surgery Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-2 rounded border border-red-200">
              <Label
                htmlFor="surgeryName"
                className="text-sm font-medium text-gray-700"
              >
                Surgery Name
              </Label>
              <Input
                id="surgeryName"
                name="surgeryName"
                value={formData.surgeryName}
                onChange={handleInputChange}
                className="mt-1 border-red-200"
              />
            </div>
            <div className=" p-2 rounded border border-red-200">
              <Label
                htmlFor="expectedDuration"
                className="text-sm font-medium text-gray-700"
              >
                Expected Duration
              </Label>
              <Input
                id="expectedDuration"
                name="expectedDuration"
                value={formData.expectedDuration}
                onChange={handleInputChange}
                className="mt-1 border-red-200"
              />
            </div>
            <div className=" p-2 rounded border border-red-200">
              <Label
                htmlFor="consultingDoctor"
                className="text-sm font-medium text-gray-700"
              >
                Consulting Doctor
              </Label>
              <Input
                id="consultingDoctor"
                name="consultingDoctor"
                value={formData.consultingDoctor}
                onChange={handleInputChange}
                className="mt-1 border-red-200"
              />
            </div>
            <div className=" p-2 rounded border-2 border-red-200">
              <Label
                htmlFor="riskInvolved"
                className="text-sm font-medium text-gray-700"
              >
                Risk Involved
              </Label>
              <Input
                id="riskInvolved"
                name="riskInvolved"
                value={formData.riskInvolved}
                onChange={handleInputChange}
                className="mt-1 border-red-200"
              />
            </div>
            <div className=" p-2 rounded border border-red-200">
              <Label
                htmlFor="surgeryType"
                className="text-sm font-medium text-gray-700"
              >
                Surgery Type
              </Label>
              <Input
                id="surgeryType"
                name="surgeryType"
                value={formData.surgeryType}
                onChange={handleInputChange}
                className="mt-1 border-red-200"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            Contact Us for More Information
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            For further inquiries, please contact our Emergency Department at
            {phone}
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{"Submitted Successfully"}</p>
        )}

        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
