
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

      <main className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 
          Main Grid Layout:
          - Uses a single persistent grid for the entire page.
          - Left column contains the sticky ProfileCard.
          - Right column contains the scrolling content stream.
          - items-start ensures both columns start at the same vertical line.
        */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] gap-10 md:gap-12 items-start pt-12 md:pt-20">
          
          {/* Left Column: Persistent Profile Card */}
          <aside className="hidden md:block sticky top-24 self-start w-full">
            <div className="max-w-sm w-full">
              <ProfileCard />
            </div>
          </aside>

          {/* Right Column: Content Stream */}
          <div className="flex flex-col space-y-24 md:space-y-32 pb-32 w-full overflow-hidden">
            {/* Mobile-only Profile Card (Visible only when stacked) */}
            <div className="md:hidden mb-8">
              <ProfileCard />
            </div>

            <Hero />
            <About />
            <Experience />
            <Projects />
            <Tools />
            <Contact />
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  );
}
