import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroScene from "@/components/home/HeroScene";
import BrandIntroScene from "@/components/home/BrandIntroScene";
import FlagshipScene from "@/components/home/FlagshipScene";
import CollectionScene from "@/components/home/CollectionScene";
import ArtOfLivingScene from "@/components/home/ArtOfLivingScene";
import ExploreScene from "@/components/home/ExploreScene";
import ClosingScene from "@/components/home/ClosingScene";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroScene />
        <BrandIntroScene />
        <FlagshipScene />
        <CollectionScene />
        <ArtOfLivingScene />
        <ExploreScene />
        <ClosingScene />
      </main>
      <Footer />
    </>
  );
}
