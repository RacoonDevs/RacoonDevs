// src/pages/PortfolioPage.jsx
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/layout/AnimatedBackground";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import AllProjects from "../components/portfolio/AllProjects";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

const PortfolioPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatedBackground mousePosition={mousePosition} />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        <PortfolioHero />
        <PortfolioStats />
        <FeaturedProjects />
        <AllProjects />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
