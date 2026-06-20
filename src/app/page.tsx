import { Hero } from "@/components/sections/Hero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FeaturedInventory } from "@/components/sections/FeaturedInventory";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <TrustStrip />
      <FeaturedInventory />
      <ServicesOverview />
      <FinalCTA />
    </>
  );
}
