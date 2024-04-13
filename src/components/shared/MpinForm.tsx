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
import { redirect, usePathname, useRouter } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { updateUserMPin } from "@/lib/actions/user.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
  mobile: z.boolean().default(false).optional(),
});

const MpinForm = ({ userId }: { userId: string }) => {
  const [tick, setTick] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();

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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await updateUserMPin(userId, data.pin, pathname);

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

    form.reset();
    router.push("/user/dashboard");
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
                <FormLabel>MPIN</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the 4-digit MPIN to secure the account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md py-2">
                <FormControl>
                  <label
                    htmlFor="Option2"
                    className="flex cursor-pointer items-start gap-4 rounded-lg p-1 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        checked={tick}
                        className="size-4 rounded"
                        id="Option2"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </FormControl>
                <div className="space-y-1 leading-none flex items-center">
                  <FormLabel className="flex flex-row gap-1">
                    Accept the{" "}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <p className="text-blue-500 cursor-pointer">
                          Terms and Conditions
                        </p>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <h3 className="px-4">Terms and Conditions</h3>
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <p className="text-slate-800 text-justify px-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed ut tellus nec sapien condimentum
                              fermentum. Donec in dolor auctor, consectetur
                              ligula nec, tincidunt velit. Sed ut tellus nec
                              sapien condimentum fermentum. Donec in dolor
                              auctor, consectetur ligula nec, tincidunt velit.
                              Sed ut tellus nec sapien condimentum fermentum.
                              Donec in dolor auctor, consectetur ligula nec,
                              tincidunt velit. Sed ut tellus nec sapien
                              condimentum fermentum. Donec in dolor auctor,
                              consectetur ligula nec, tincidunt velit.
                            </p>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel asChild>
                            <Button
                              onClick={() => {
                                setTick(false);
                              }}
                              className="text-slate-900"
                            >
                              Decline
                            </Button>
                          </AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <Button
                              onClick={() => {
                                setTick(true);
                              }}
                            >
                              Agree
                            </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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
