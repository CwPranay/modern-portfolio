
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

      {/* 1. Hero Section: Left card scrolls normally with content */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-12 items-start pt-10 md:pt-16">
          <aside className="w-full">
            <div className="max-w-sm w-full mx-auto md:mx-0">
              <ProfileCard />
            </div>
          </aside>
          <main>
            <Hero />
          </main>
        </div>
      </section>

      {/* 2. Main Content Section: Left card becomes sticky after hero ends */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-12 items-start">
          
          {/* Sticky wrapper for desktop - only appears after hero section is scrolled past */}
          <aside className="hidden md:block sticky top-24 self-start w-full">
            <div className="max-w-sm w-full">
              <ProfileCard />
            </div>
          </aside>

          {/* Scrolling content stream */}
          <div className="flex flex-col space-y-32 pb-32 w-full overflow-hidden">
            <About />
            <Experience />
            <Projects />
            <Tools />
            <Contact />
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
}
