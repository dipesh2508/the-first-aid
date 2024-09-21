import React from "react";

const LocationMap: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-800 mb-8">Find Us Here</h2>
        <div className="relative w-full h-[400px] mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9677688823763!2d77.28041261115577!3d28.54068848814414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3717feed0a9%3A0x75f7243c5e33d581!2sApollo%20Hospital%2C%20Jasola!5e0!3m2!1sen!2sin!4v1726860460510!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <a
              href="https://maps.app.goo.gl/eKcyCCX6QTuVQ7sx6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition duration-300"
            >
              View in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
