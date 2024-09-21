"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function GuardianForm() {
  const [guardianUserId, setGuardianUserId] = useState("");
  const [emergencyConsent, setEmergencyConsent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen max-w-3xl min-w-2/3 flex items-center justify-center bg-[#FBF1F1] px-12 rounded-lg">
      <div className="w-full max-w-md p-6 bg-[#FBF1F1]">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#720A08]">
            Ipollo Hospitals, Bengaluru
          </h1>
          <h2 className="text-lg text-[#720A08]">Guardian Addition Form</h2>
        </div>
        <form onSubmit={handleSubmit} className=" space-y-6">
          <div className="border-b border-primary-9  ">
            <h3 className="text-lg font-semibold text-[#720A08] mb-2">
              Add Guardian by User ID
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Please enter the User ID of the guardian who will be added to your
              hospital profile.
            </p>



            <Input
              id="guardianUserId"
              value={guardianUserId}
              onChange={(e) => setGuardianUserId(e.target.value)}
              className="w-full text-primary-6 my-4"
              required
              placeholder="Guardian ID"
            />
          </div>
          <div className=" border-b border-primary-9">
            <h3 className="text-lg font-semibold text-[#720A08] mb-2">
              Emergency Consent
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Would you like to authorize this guardian to provide consent on
              your behalf for emergency medical assistance?
            </p>
            <RadioGroup
              value={emergencyConsent}
              onValueChange={setEmergencyConsent}
              className="flex flex-col  text-primary-9 mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">YES</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">NO</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="border-b border-primary-9  p-4 ">
            <h3 className="text-lg font-semibold text-[#720A08] mb-2">
              Declaration
            </h3>
            <p className="text-sm text-gray-600">
              I, [Patient&apos;s Name], confirm that the above information is
              accurate and true. I authorize Ipollo Hospitals, Mangaluru to add
              the listed guardian to my profile and contact them in case of an
              emergency or any necessary medical assistance.
            </p>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#F2403C] hover:bg-[#D63631] text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
