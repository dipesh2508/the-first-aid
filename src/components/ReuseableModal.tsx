"use client";

import { PenIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Hint from "./Hint";

export function ReuseableModal({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Hint align="center" side="bottom" label="Edit">
            <PenIcon className="hover:text-green-500" />
          </Hint>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-black">{title}</DialogTitle>
          <DialogDescription className="text-black">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
