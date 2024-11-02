import ConsentForm from "@/components/forms/ConsentForm";
import Image from "next/image";
import logo from "@/assets/TheFirstAid.png";

const ConsentPage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-1/50 to-white py-10 w-full">
      <div className="container max-w-3xl mx-auto px-4 w-full">
        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8 text-center">
            <Image
              src={logo}
              alt="logo"
              className="mx-auto h-24 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6932%) hue-rotate(359deg) brightness(100%) contrast(124%)",
              }}
            />
            <h1 className="text-3xl font-bold text-primary-9 mb-2">
              Consent Request Form
            </h1>
            <p className="text-muted-foreground">
              Please fill in the required details for the consent request
            </p>
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <ConsentForm appointmentId={params.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConsentPage;
