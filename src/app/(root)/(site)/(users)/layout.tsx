import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import DashboardNav from "@/components/userDashboard/DashboardNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The First Aid",
  description: "An Emergency solution to all healthcare problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardNav />
        {children}
      </body>
    </html>
  );
}
