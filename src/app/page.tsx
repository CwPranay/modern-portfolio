
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
      {/* Floating Navigation */}
      <Navbar />

      {/* Root Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Pure CSS Sticky Profile Card */}
          <aside className="md:pt-[25vh] h-full relative">
            <div className="sticky top-24">
              <ProfileCard />
            </div>
          </aside>

          {/* Right Side: Scrollable Content */}
          <main className="space-y-32 pb-32">
            <Hero />
            
            <section className="space-y-32">
              <About />
              <Experience />
              <Projects />
              <Tools />
            </section>

            <Contact />
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
