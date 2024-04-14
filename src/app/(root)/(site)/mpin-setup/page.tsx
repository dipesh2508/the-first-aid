import Image from "next/image";
import mpin from "@/assets/mpin.png";
import MpinForm from "@/components/shared/MpinForm";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const page = async () => {

    const user = await currentUser();
    if(!user) return null;

    const userData = await fetchUser(user.id);
    if(!userData) return null;

    if(userData.mpin){
      redirect("/user/dashboard");
        };

  return (
    <section className="grid grid-cols-2 max-h-screen overflow-clip">
      <div>
        <Image src={mpin} alt="" />
      </div>
      <MpinForm userId={user.id} />
    </section>
  );
};

export default page;
