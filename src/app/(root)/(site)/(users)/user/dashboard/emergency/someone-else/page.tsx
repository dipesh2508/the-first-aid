"use client";
import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const Page = () => {
  return (
    <div>
      <Scanner
        onResult={(text, result) => console.log(text, result)}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
};

export default Page;
