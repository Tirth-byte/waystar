import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroScene from "@/components/home/HeroScene";
import BrandIntroScene from "@/components/home/BrandIntroScene";
import FeaturedScene from "@/components/home/FeaturedScene";
import PhilosophyScene from "@/components/home/PhilosophyScene";
import GatewayScene from "@/components/home/GatewayScene";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroScene />
        <BrandIntroScene />
        <FeaturedScene />
        <PhilosophyScene />
        <GatewayScene />
      </main>
      <Footer />
    </>
  );
}
