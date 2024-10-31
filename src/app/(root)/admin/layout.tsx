import type { Metadata } from "next";
import DashboardNav from "@/components/shared/DashboardNav";

export const metadata: Metadata = {
  title: "The First Aid",
  description:
    "The First Aid is an Emergency solution to all healthcare problems",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DashboardNav />
      <div className="flex">
        {children}
      </div>
    </main>
  );
}
