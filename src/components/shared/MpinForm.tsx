"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
  mobile: z.boolean().default(false).optional(),
});

const MpinForm = () => {
  const [tick, setTick] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setTick(event.target.checked);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
      mobile: tick,
    },
  });

  useEffect(() => {}, [tick]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "The MPIN is set successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md text-primary-8 p-4">
          <code className="text-primary-9">
            {JSON.stringify(data.pin, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col items-center h-screen py-16 justify-center gap-16 px-16">
      <div className="text-center w-full text-lg font-serif">
        <h2>SET SECURITY PIN</h2>
      </div>
      <div className="text-left w-full flex gap-3 flex-col">
        <h1 className="text-primary-8 text-4xl font-semibold font-serif">
          Enter MPIN
        </h1>
        <p className="text-primary-2 mr-24">
          Lorem ipsum dolor sit amet consectetur. Mattis montes suspendisse urna
          urna sit. disse arcu. Quam dictum
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <label
                    htmlFor="Option2"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        checked={tick}
                        className="size-4 rounded border-gray-300"
                        id="Option2"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Accept the
                    <Link href="/examples/forms">terms and conditions</Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={!tick}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MpinForm;
