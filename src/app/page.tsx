
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Tools } from "@/components/portfolio/Tools";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { AiSuggestionTool } from "@/components/portfolio/AiSuggestionTool";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Root Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] gap-12 lg:gap-24">
          
          {/* Left Side: Sticky Profile Card */}
          <aside className="relative">
            <ProfileCard />
          </aside>

          {/* Right Side: Scrollable Content */}
          <main className="space-y-32">
            <Hero />
            
            <section className="space-y-24">
              <Projects />
              <Tools />
              <AiSuggestionTool />
              <Testimonials />
            </section>

            <Contact />
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
