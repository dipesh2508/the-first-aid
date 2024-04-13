import Image from "next/image";
import mpin from "@/assets/mpin.png";
import MpinForm from "@/components/shared/MpinForm";
import { currentUser } from "@clerk/nextjs";

const page = async () => {

    const user = await currentUser();
    if(!user) return null;

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
