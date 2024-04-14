import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import EmergencyMeForm from "@/components/form/EmergencyMeForm";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async () => {

  const userData = await currentUser();
  if(!userData) return null;

  const user = await fetchUser(userData.id); 
  if(!user) return null;
  
  return (
    <div className="my-12 mx-36">
      {/* <Scanner
        onResult={(text, result) => console.log(text, result)}
        onError={(error) => console.log(error?.message)}
      /> */}
      <h1 className="text-2xl">Emergency Hospital Search</h1>
      <EmergencyMeForm id={user._id.toString()} />
    </div>
  );
};

export default Page;
