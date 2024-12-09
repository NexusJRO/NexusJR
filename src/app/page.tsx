import Counters from "@/components/Counters";
import FeaturedProjects from "@/components/FeacturedProjects";
import NexusJrFooter from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      {/*<Counters />*/}
      <NexusJrFooter />
    </div>
  );
}
