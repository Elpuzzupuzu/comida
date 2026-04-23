import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/hero/HeroSection";
import FeaturesBar from "./components/sections/FeaturesBar";
import MenuSection from "./components/sections/MenuSection";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  const [activeNav, setActiveNav] = useState("Inicio");

  return (
    <>
      <style>{globalStyles}</style>

      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <HeroSection />
      <MenuSection />
    </>
  );
}