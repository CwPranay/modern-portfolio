
"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && window.innerWidth >= 768) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        // Activate sticky when the bottom of the hero section is passed
        setIsSticky(window.scrollY >= heroBottom - 80);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      {/* Floating Navigation */}
      <Navbar />

      {/* Root Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Conditional Sticky Profile Card */}
          <aside 
            className={`h-fit transition-all duration-300 ${
              isSticky ? "md:sticky md:top-[80px]" : "relative"
            }`}
          >
            <ProfileCard />
          </aside>

          {/* Right Side: Scrollable Content */}
          <main className="space-y-32">
            <div ref={heroRef}>
              <Hero />
            </div>
            
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
