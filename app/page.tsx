import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials"
export default function HomePage() {
  return (
      <div className="w-full overflow-x-hidden">
      <Hero />
      <ServicesSection />
      <Testimonials/>
      <AboutSection />
    </div>
  );
}
