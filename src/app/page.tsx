
"use client";

import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Tools } from "@/components/portfolio/Tools";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/portfolio/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Root Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-12 items-start">
          
          {/* Left Side: Profile Card - Perfectly Aligned Top */}
          <aside className="pt-10 md:pt-16 md:sticky md:top-24 self-start w-full">
            <div className="max-w-sm w-full mx-auto md:mx-0">
              <ProfileCard />
            </div>
          </aside>

          {/* Right Side: Main Content Stream */}
          <main className="flex flex-col space-y-32 pb-32 w-full overflow-hidden">
            <Hero />
            
            <div className="space-y-32">
              <About />
              <Experience />
              <Projects />
              <Tools />
            </div>

            <Contact />
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
