"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { addNominee } from "@/lib/actions/patient.actions";
import ButtonLoader from "@/components/shared/ButtonLoader";
import { useToast } from "@/hooks/use-toast";

export default function GuardianForm({ patientId, name }: { patientId: string, name: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [guardianUserId, setGuardianUserId] = useState("");
  const [emergencyConsent, setEmergencyConsent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (emergencyConsent === 'yes') {
        const result = await addNominee(patientId, guardianUserId);
        
        if (result.success) {
          toast({
            title: "Guardian Added Successfully",
            description: "Your guardian has been added to your profile",
            variant: "default",
          });
          router.refresh();
          router.push("/dashboard");
        } else {
          toast({
            title: "Error",
            description: result.message || "Failed to add guardian",
            variant: "destructive",
          });
          console.error("Form submission failed", result.message);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      console.error("An error occurred during form submission", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen max-w-3xl min-w-2/3 flex items-center justify-center bg-white shadow-2xl px-12 rounded-lg">
      <div className="w-full max-w-md p-6 bg-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-8">
            The First Aid Team
          </h1>
          <h2 className="text-lg text-primary-8">Guardian Addition Form</h2>
        </div>
        <form onSubmit={handleSubmit} className=" space-y-6">
          <div className="border-b border-primary-9  ">
            <h3 className="text-lg font-semibold text-primary-8 mb-2">
              Add Guardian by UserName
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Please enter the Username of the guardian who will be added to your
              patient profile.
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
            <h3 className="text-lg font-semibold text-primary-8 mb-2">
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
            <h3 className="text-lg font-semibold text-primary-8 mb-2">
              Declaration
            </h3>
            <p className="text-sm text-gray-600">
              I, {name}, confirm that the above information is
              accurate and true. I authorize the first aid team to add
              the listed guardian to my profile and contact them in case of an
              emergency or any necessary medical assistance.
            </p>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-5 hover:bg-primary-6 text-white"
          >
            {isSubmitting && <ButtonLoader isLoading={isSubmitting} />}
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
