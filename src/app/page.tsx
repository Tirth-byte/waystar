import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroScene from "@/components/home/HeroScene";
import DestinationSelector from "@/components/home/DestinationSelector";
import ResidenceCinema from "@/components/home/ResidenceCinema";
import LivingScene from "@/components/home/LivingScene";
import PrivateAcquisition from "@/components/home/PrivateAcquisition";
import FinaleScene from "@/components/home/FinaleScene";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C]">
        {/* Scene 01: The Cinematic Arrival (100svh Edge-to-Edge) */}
        <HeroScene />

        {/* Scene 02: Two Worlds — Dubai × New York Destination Selector */}
        <DestinationSelector />

        {/* Scene 03: The Private Collection — Cinema-Led Residence Showcase */}
        <ResidenceCinema />

        {/* Scene 04: The Art of Living — Interior Volumes & Natural Light */}
        <LivingScene />

        {/* Scene 05: Private Acquisition — Confidential Advisory Transition */}
        <PrivateAcquisition />

        {/* Scene 06: The Finale — Night Skyline into Editorial Closing */}
        <FinaleScene />
      </main>
      <SiteFooter />
    </>
  );
}
