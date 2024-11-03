"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { submitAppointmentConsent } from "@/lib/actions/appointment.action";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  mpin: z
    .string()
    .length(4, "MPIN must be exactly 4 digits")
    .regex(/^\d+$/, "MPIN must contain only numbers"),
});

interface ConsentSubmissionFormProps {
  userId: string;
  appointmentId: string;
}

export default function ConsentSubmissionForm({
  userId,
  appointmentId,
}: ConsentSubmissionFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mpin: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await submitAppointmentConsent(
        userId,
        appointmentId,
        parseInt(values.mpin)
      );

      if (result.success) {
        toast({
          title: "Success",
          description: "Consent submitted successfully",
          variant: "default",
        });

        router.refresh();
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
        description: "Failed to submit consent",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="mpin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your 4-digit MPIN to confirm consent</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={4}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <ButtonLoader isLoading={isSubmitting} />}
          Submit Consent
        </Button>
      </form>
    </Form>
  );
}
