'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  consent: z.enum(['deny', 'approve'], {
    required_error: "You must select an option.",
  }),
  mpin: z
    .string()
    .length(4, "MPIN must be exactly 4 digits.")
    .regex(/^\d+$/, "MPIN must contain only numbers."),
});

type FormValues = z.infer<typeof formSchema>;

interface ConsentFormActionProps {
  patientName: string;
}

const ConsentFormAction: React.FC<ConsentFormActionProps> = ({ patientName }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: undefined,
      mpin: '',
    },
  });

  const onSubmit = (values: { consent: 'deny' | 'approve', mpin: string }) => {
    console.log('Form submitted:', values);
    // Handle form submission logic here

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="action-required">
          <h3>Action Required</h3>
          <p>Please Approve or Deny the surgery request by selecting an option below. Your consent is critical to ensure that the medical team can proceed without delay.</p>
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="deny" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Deny Consent
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="approve" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Consent
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="verification-authorization">
          <h3>Verification & Authorization</h3>
          <p>To proceed, please verify your identity using the following options:</p>
          <FormField
            control={form.control}
            name="mpin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter MPIN (Mobile PIN)</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    {...field}
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
        </div>

        <div className="acknowledgment">
          <h3>Acknowledgment</h3>
          <p>By submitting this consent form, I confirm that I have read and understood the details provided regarding the surgery for {patientName}. I give my approval for the surgery to be performed as per the doctor&apos;s recommendation.</p>
        </div>


        <div className="contact-us">
          <h3>Contact Us for More Information</h3>
          <p>For further inquiries, please contact our Emergency Department at (011) 26588700.</p>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ConsentFormAction;
