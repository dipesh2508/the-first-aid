import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The First Aid",
  description: "The First Aid is an Emergency solution to all healthcare problems",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
