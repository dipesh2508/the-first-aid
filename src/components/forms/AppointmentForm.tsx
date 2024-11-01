"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getAllHospitals } from "@/lib/actions/hospital.actions";
import { getDoctorsByHospital, createAppointment } from "@/lib/actions/appointment.action";
import ButtonLoader from "@/components/shared/ButtonLoader";
import MotionDiv from "@/components/animations/MotionDiv";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  phone: z.string().min(1, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  hospital: z.string().min(1, "Hospital is required"),
  doctor: z.string().min(1, "Doctor is required"),
  appointmentType: z.enum(["normal", "emergency"]),
  emergencyType: z.string().optional(),
});

const emergencyTypes = [
  { id: "accident", name: "Accident" },
  { id: "heart_attack", name: "Heart Attack" },
  { id: "stroke", name: "Stroke" },
  { id: "others", name: "Others" },
];

export default function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      date: "",
      time: "",
      hospital: "",
      doctor: "",
      appointmentType: "normal",
      emergencyType: "",
    },
  });

  useEffect(() => {
    const fetchHospitals = async () => {
      const hospitalsList = await getAllHospitals();
      setHospitals(hospitalsList);
    };
    fetchHospitals();
  }, []);

  const handleHospitalChange = async (hospitalId: string) => {
    const hospitalDoctors = await getDoctorsByHospital(hospitalId);
    setDoctors(hospitalDoctors);
    form.setValue("hospital", hospitalId);
    form.setValue("doctor", ""); // Reset doctor selection
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await createAppointment({
        username: values.username,
        consultingDoctor: values.doctor,
        hospital: values.hospital,
        phone: values.phone,
        date: values.date,
        time: values.time,
        appointmentType: values.appointmentType,
        ...(values.appointmentType === "emergency" ? {
          emergencyType: values.emergencyType
        } : {})
      });

      if (result.success) {
        toast({
          title: "Success",
          description: "Appointment created successfully!",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong",
          variant: "destructive",
        });

        console.log(result.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create appointment",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      router.push("/dashboard");
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4 text-slate-800 bg-white"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appointmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-2">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("appointmentType") === "emergency" && (
                <FormField
                  control={form.control}
                  name="emergencyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-2">
                            <SelectValue placeholder="Select emergency type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {emergencyTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="hospital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hospital</FormLabel>
                    <Select
                      onValueChange={handleHospitalChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-2">
                          <SelectValue placeholder="Select hospital" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {hospitals.map((hospital) => (
                          <SelectItem key={hospital._id} value={hospital._id}>
                            {hospital.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="doctor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Doctor</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!form.watch("hospital")}
                    >
                      <FormControl>
                        <SelectTrigger className="border-2">
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor._id} value={doctor._id}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" className="border-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" className="border-2" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="col-span-2 bg-primary-7 hover:bg-[#BF100D] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ButtonLoader isLoading={isSubmitting} />
                ) : (
                  "Make an Appointment"
                )}
              </Button>
            </form>
          </Form>
    </MotionDiv>
  );
}
