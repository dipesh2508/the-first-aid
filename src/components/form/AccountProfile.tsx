"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
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
import { updateUserProfile } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    phone: string;
    gender: string;
    aadhar: string;
    image: string;
    email: string;
  };
}

const AccountProfile = ({ user }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      email: user?.email || "",
      phone: user?.phone || "",
      aadhar: user?.aadhar || "",
      gender: user?.gender || "",
      path: pathname,
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    //update user profile
    await updateUserProfile({
      clerkId: user.id,
      username: values.username,
      name: values.name,
      email: user.email,
      phone: user.phone,
      gender: values.gender,
      aadhar: user.aadhar,
      path: pathname,
    });

    if (pathname === "/user/profile/edit") {
      router.back();
    } else {
      router.push(`/user/dashboard/${user.id}`);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-4 bg-primary-1 shadow-xl px-12 py-8 rounded-lg w-full"
      >
        <FormLabel className="text-slate-900 font-bold text-4xl font-serif">Personal Info Edit form</FormLabel>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Name</FormLabel>
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
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Username</FormLabel>
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
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Email</FormLabel>
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
          name="phone"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Phone</FormLabel>
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
          name="gender"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Gender</FormLabel>
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
          name="aadhar"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Aadhar</FormLabel>
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
        <div>
          <Button type="submit" variant="default">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AccountProfile;
