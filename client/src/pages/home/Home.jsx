import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/sections/hero/HeroSection";
import FeaturesBar from "../../components/sections/hero/components/FeaturesBar";
import MenuSection from "../../components/sections/MenuSection";

export default function Home() {
  const [activeNav, setActiveNav] = useState("Inicio");

  return (
    <>
      {/* <Navbar activeNav={activeNav} setActiveNav={setActiveNav} /> */}
      <HeroSection />
      {/* <FeaturesBar /> */}
      <MenuSection />
      
    </>
  );
}