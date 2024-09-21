import Image from 'next/image';
import heroImage from '@/assets/welcome_hopital.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeroHospital = () => {
  return (
    <div className="relative h-screen">
      <Image 
        src={heroImage} 
        alt="Hospital Background" 
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-10 py-8 flex flex-col h-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-red-800 mb-2">Welcome to Ipollo Hospitals</h1>
            <p className="text-xl text-gray-600">&quot;Where Compassion Meets Excellence&quot;</p>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            {[ 
              { icon: FaPhone, title: 'Phone', content: '123-456-789' },
              { icon: FaEnvelope, title: 'Email', content: 'Ipollo@gmail.com' },
              { icon: FaMapMarkerAlt, title: 'Location', content: 'Chennai' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <item.icon className="text-3xl text-red-800 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-red-800">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHospital;
