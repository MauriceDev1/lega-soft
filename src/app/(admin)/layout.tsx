import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import Logo from "@/app/images/vecteezy_logo-element-mix_66617-removebg-preview (1).png"
import Menu from "../components/Menu";
import AdminNavbar from "../components/AdminNavbar";

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
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">ELS</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
