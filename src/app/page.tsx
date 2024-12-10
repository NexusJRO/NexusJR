import FeaturedProjects from "@/components/FeacturedProjects";
import NexusJrFooter from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NexusJRAbout from "@/components/Sobre";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <NexusJRAbout />
      <NexusJrFooter />
    </div>
  );
}
