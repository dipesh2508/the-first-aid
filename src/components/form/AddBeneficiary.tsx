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
import { beneficiaryValidation } from "@/lib/validations/beneficiary";
import {
  findUserByUsername,
  updateUserProfile,
} from "@/lib/actions/user.actions";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import UserSearchCard from "../shared/UserSearchCard";

const AddBeneficiary = ({ props }: any) => {
  console.log(props, "props");
  const [users, setUsers] = useState<any[]>([]);
  const form = useForm({
    resolver: zodResolver(beneficiaryValidation),
    defaultValues: {
      username: "", // Assuming patient is defined elsewhere
    },
  });
  const onSubmit = async (values: z.infer<typeof beneficiaryValidation>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const fetchedUsers = await findUserByUsername(values.username);
      if (!fetchedUsers) {
        return;
      }

      setUsers(fetchedUsers);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-4 bg-primary-1 shadow-xl px-12 py-8 rounded-lg w-full"
        >
          <FormLabel className="text-slate-900 font-bold text-4xl font-serif">
            Add Beneficiary
          </FormLabel>
          <div className="flex gap-4 justify-center">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormLabel className="text-slate-900">User Name</FormLabel>
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
            <div className="my-auto">
              <p className="opacity-0">k</p>
              <Button variant={"outline"} size="icon" type="submit">
                <SearchIcon className="size-4" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="mt-4 flex flex-col h-auto w-full gap-4">
        {users.map((user) => {
          console.log(user);
          return (
            <div key={user.id} className="flex gap-4">
              <UserSearchCard
                patientId={props.role}
                image={user.image}
                name={user.name}
                bio={user.bio}
                username={user.username}
                contacts={user.contacts}
                userId={user._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddBeneficiary;
