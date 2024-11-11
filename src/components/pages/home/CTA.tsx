import Link from "next/link";
import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CTA = () => {
  return (
    <>
      <section>
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-2 lg:gap-8 lg:grid-cols-2 ">
            <MotionDiv
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="lg:py-24 px-4 py-8 lg:px-12"
            >
              <h2 className="text-3xl font-bold lg:font-normal sm:text-5xl text-gray-950">
                {"Don't wait for emergencies. Take control."}
              </h2>

              <MotionDiv
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="mt-4 text-gray-600">
                  Emergencies strike unexpectedly, leaving you feeling helpless. But with The First Aid app, skip the panic and focus on getting the help you need.
                </p>
              </MotionDiv>

              <MotionDiv
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="#"
                  className="mt-8 inline-block rounded bg-primary-5 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4"
                >
                  Join now
                </Link>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:py-24 px-4 py-8 lg:px-12 bg-primary-1"
            >
              <h2 className="text-3xl font-bold lg:font-normal sm:text-5xl text-gray-950">
                {"Don't just treat patients, empower them."}
              </h2>

              <MotionDiv
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="mt-4 text-gray-600">
                  Empowerment is key. The First Aid app equips your patients with the tools and information they need to actively participate in their healthcare journey. 
                </p>
              </MotionDiv>

              <MotionDiv
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="#"
                  className="mt-8 inline-block rounded bg-primary-5 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4"
                >
                  Connect
                </Link>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
