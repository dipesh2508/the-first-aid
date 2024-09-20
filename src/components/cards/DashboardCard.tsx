import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import clsx from "clsx";
import MotionDiv from "@/components/animations/MotionDiv";

interface Props {
  title: string;
  name: string;
  link: string;
  linkText: string;
  Icon: IconType;
  isReversed: boolean;
}

const DashboardCard = ({
  title,
  name,
  link,
  linkText,
  Icon,
  isReversed,
}: Props) => {
  return (
    <MotionDiv whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="bg-white relative overflow-hidden hover:border shadow-md w-full group/card rounded-3xl hover:cursor-auto h-full">
        <CardHeader>
          <h3 className="text-primary-10 font-bold text-2xl">{title}</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-between w-2/3">
            <h2 className="text-primary-10 font-medium text-sm lg:text-xl min-h-14">
              {name}
            </h2>
            <div>
              <Button
                variant="default"
                size="lg"
                className="mt-4 bg-primary-6 text-primary-1 font-semibold group-hover/card:bg-primary-4 group-hover/card:text-white border border-primary-6 focus:ring-primary-6"
                asChild
              >
                <Link href={link}>{linkText}</Link>
              </Button>
            </div>
          </div>
        </CardContent>
        <Icon
          className={clsx(
            "text-xl absolute top-8 -right-5 size-36 text-primary-6 group-hover/card:text-primary-4",
            !isReversed ? "scale-x-[-1]" : ""
          )}
        />
      </Card>
    </MotionDiv>
  );
};

export default DashboardCard;
