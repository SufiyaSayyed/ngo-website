import Hero from "@/components/home/Hero";
import MissionSection from "@/components/home/MissionSection";
import ImpactStats from "@/components/home/ImpactStats";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ImpactStats />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
