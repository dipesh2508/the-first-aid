"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MessageCirclePlus, MessageCircleX } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { addNominee } from "@/lib/actions/patient.actions";

const UserSearchCard = ({
  image,
  name,
  bio,
  username,
  contacts,
  patientId,
  userId,
}: {
  image: string;
  name: string;
  bio: string;
  patientId: string;
  username: string;
  contacts: string[];

  userId: string;
}) => {
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Card className="w-full">
      <CardHeader className="overflow-hidden px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt="avatar"
            className="col-span-1 h-10 w-10 rounded-full"
          />
          <div className="col-span-4">
            <CardTitle className="text-xl">
              {name}{" "}
              <span className="col-span-1 flex-wrap text-xs">@{username}</span>
            </CardTitle>
            <CardDescription className="text-sm">{bio}</CardDescription>
          </div>
          <div className="">
            <Button
              size={"sm"}
              onClick={async () => {
                await addNominee( patientId, userId );
                router.refresh();
              }}
            >
              <MessageCirclePlus size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserSearchCard;
