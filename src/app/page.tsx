import Hero from "@/app/components/Hero";
import { Metadata } from "next";
import FeatureSection from "./components/FeatureSection";

export const metadata: Metadata = {
  title: "ELS | Home",
  description: "Electronic Litigation System",
};

export default function Home() {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="w-full m-auto max-w-7xl items-center justify-between px-6 lg:px-8 h-auto">
        <Hero />
        <FeatureSection />
      </div>
    </div>
  );
}
