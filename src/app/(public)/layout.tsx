import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
        <div className="w-full m-auto max-w-7xl items-center justify-between px-6 lg:px-8 h-auto py-8 lg:py-0">
            {children}
        </div>
    </div>
  );
}
