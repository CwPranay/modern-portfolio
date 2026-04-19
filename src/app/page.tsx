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
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Sticky Profile Card */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <ProfileCard />
          </aside>

          {/* Right Side: Scrollable Content */}
          <main className="space-y-32">
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
