import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import clsx from "clsx";
interface Props {
  title: string;
  name: string;
  link: string;
  linkText: string;
  Icon: IconType;
  isReversed: Boolean;
}
const ProfileCard = ({
  title,
  name,
  link,
  linkText,
  Icon,
  isReversed,
}: Props) => {
  return (
    <div>
      <Card className="bg-primary-1 relative overflow-hidden group hover:bg-primary-3 shadow-md hover:shadow-none shadow-primary-10  w-full border border-solid border-primary-2 rounded-3xl">
        <div>
          <CardHeader>
            <h3 className="text-primary-10 font-bold text-2xl">{title}</h3>
          </CardHeader>
          <CardContent>
            <div>
              <h2 className="text-primary-10 font-medium text-sm lg:text-xl">
                {name}
              </h2>
              <Link
                className="mt-8 inline-block h-fit rounded bg-primary-1 px-6 py-3 text-sm font-medium text-primary-10 transition hover:text-white border border-primary-8 hover:bg-primary-7 focus:outline-none focus:ring focus:ring-primary-4"
                href={link}
              >
                {linkText}
              </Link>
            </div>
          </CardContent>
        </div>
        <Icon
          className={ 
            clsx(
                    isReversed
                ? "text-xl scale-x-[-1]  absolute top-6 text-primary-2 hover:text-primary-1 -right-5 size-44"
                : "text-xl  absolute top-6 text-primary-2 hover:text-primary-1 -right-5 size-44 "
            )
          }
        />
      </Card>
    </div>
  );
};

export default ProfileCard;
