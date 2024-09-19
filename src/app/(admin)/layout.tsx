import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ELS | Company",
  description: "Electronic Litigation System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-gray-100 h-screen">
      <div className="w-full bg-white h-16 border-b flex justify-end px-10">
        <div className="w-96 bg-red-300 h-14 justify-end my-auto">
          <div className="w-12 h-12 rounded-full bg-gray-200 my-1">
            <Image
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile Picture"
              width={48} // Tailwind `h-12` (12 * 4px = 48px)
              height={48} // Tailwind `w-12` (12 * 4px = 48px)
              quality={80}
            />
          </div>
        </div>
      </div>
        {children}
    </div>
  );
}
