import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import { Mail, MapPin, Phone } from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <MotionDiv
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re here to help and answer any questions you might have.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary-1 rounded-lg">
              <Phone className="w-6 h-6 text-primary-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">{"+91 629-(903)-5580"}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary-1 rounded-lg">
              <Mail className="w-6 h-6 text-primary-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">tnt.tryntest@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary-1 rounded-lg">
              <MapPin className="w-6 h-6 text-primary-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">
                Try N Test Office, Gate no. 1, Downtown, Metro station, Sarojini
                Nagar Market, Sarojini Nagar, Delhi 110023
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl overflow-hidden shadow-lg h-[300px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.190099770869!2d77.18451313243818!3d28.57584215212664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce380844a9bf7%3A0x63fc49ca6c3c8bf2!2sNBCC%20Downtown%20Sarojini%20Nagar%2C%20New%20Delhi%20%7C%20Retail%20%26%20Office%20Spaces!5e0!3m2!1sen!2sin!4v1731313723618!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MotionDiv>
    </div>
  );
};

export default ContactInfo;
