import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/images/vecteezy_logo-element-mix_66617-removebg-preview (1).png"
import Menu from "../components/Menu";

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
    <div className="w-full flex h-screen">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] p-4 xl:w-[14%]">
        <Link href="/" className="flex items-center justify-center gap-2">
        <Image
                alt="Product screenshot"
                src={Logo}
                width={2432}
                height={1442}
                className="w-12 h-12"
            />
            <span className="hidden lg:block">Electronic Litigation System</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[91%] lg:w-[84%] xl-[86%] bg-blue-100">
          {children}
      </div>
    </div>
  );
}
