import AddBeneficiary from "@/components/form/AddBeneficiary";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const userData = await currentUser();
  if (!userData) return null;

  const user = await fetchUser(userData.id);
  if (!user) {
    return null;
  }
  return (
    <div>
      <AddBeneficiary props={user} />
    </div>
  );
};

export default Page;
