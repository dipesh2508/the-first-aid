import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
    title: "The First Aid",
    description: "An Emergency solution to all healthcare problems",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <main className="w-full flex justify-center items-center min-h-screen">
            {children}
            <Toaster />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}