import type { Metadata } from "next";
import DashboardNav from "@/components/shared/DashboardNav";
import Sidebar from "@/components/shared/Sidebar";

export const metadata: Metadata = {
  title: "The First Aid",
  description:
    "The First Aid is an Emergency solution to all healthcare problems",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DashboardNav />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
