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
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { searchHospitalByName } from "@/lib/actions/hospital.actions";
import { raiseAppointment } from "@/lib/actions/patient.actions";

export const SearchFormSchema = z.object({
  name: z.string({
    required_error: "Please enter a username",
  }),
});

const EmergencyMeForm = ({ id }: { id: string }) => {
  const [hospitals, setHospitals] = useState<any[]>([]);

  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SearchFormSchema>) {
    try {
      const fetchedUsers = await searchHospitalByName(values.name);
      if (!fetchedUsers) {
        return;
      }

      setHospitals(fetchedUsers);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  return (
    <div className=" mt-2 flex flex-col gap-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-auto flex w-full flex-1 flex-row justify-between gap-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1 gap-y-4">
                <FormControl>
                  <Input placeholder="Enter a username to find" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <SearchIcon size={18} />
          </Button>
        </form>
      </Form>

      <div className="flex flex-col gap-4 mt-6">
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            className="flex flex-row justify-between gap-2 bg-primary-1 rounded-sm px-4 py-2"
          >
            <div className="flex-col flex">
              <h3 className="font-semibold text-lg">{hospital.name}</h3>
              <p>Address: {hospital.address}</p>
              <p>Phone: {hospital.phone}</p>
            </div>
            <div className="flex items-center">
              <Button
                className="bg-primary-5 text-white"
                onClick={async () => {
                  await raiseAppointment({
                    patient: id,
                    hospital: hospital._id,
                    date: new Date().toISOString(),
                    emergencyType: "others",
                    appointmentType: "emergency",
                    doctor: null, // replace with actual doctor id
                    status: "pending", // replace with actual status // replace with actual doctor id
                    time: new Date().toISOString(),
                  });
                }}
              >
                Emergency Schedule
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyMeForm;
