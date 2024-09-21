import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface DoctorCardProps {
    imageSrc: StaticImageData;
  name: string;
  qualification: string;
  department: string;
  [key: string]: any;
}

export default function DoctorCard({
  imageSrc,
  name,
  qualification,
  department,
  ...props
}: DoctorCardProps) {
  return (
    <Card className="w-fit max-w-sm mx-auto" {...props}>
      <CardContent className=" flex flex-col items-center text-center">
        <div className="max-w-sm w-full  h-48 relative mb-4">
          <Image
            src={imageSrc}
            alt={`${name}'s profile picture`}
            layout="fill"
            className="object-cover"
          />
        </div>
        <h3 className="text-xl  text-primary-9 font-semibold mb-1">{name}</h3>
        <p className="text-lg text-primary-9 mb-1">{qualification}</p>
        <p className="text-lg text-primary-9">{department}</p>
      </CardContent>
    </Card>
  );
}
