
import Navbar from "@/components/shared/Navbar";

export const metadata = {
    title: "The First Aid",
    description: "An Emergency solution to all healthcare problems",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        <main className="w-full flex justify-center items-center min-h-screen">
            {children}
        </main>
    </>
  );
}