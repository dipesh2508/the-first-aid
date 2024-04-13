import Image from "next/image";
import mpin from "@/assets/mpin.png";
import MpinForm from "@/components/shared/MpinForm";
const page = () => {
  return (
    <section className="grid grid-cols-2 max-h-screen overflow-clip">
      <div>
        <Image src={mpin} alt="" />
      </div>
      <MpinForm />
    </section>
  );
};

export default page;
