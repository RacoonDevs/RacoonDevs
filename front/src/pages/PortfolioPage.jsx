// src/pages/PortfolioPage.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/layout/AnimatedBackground";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import AllProjects from "../components/portfolio/AllProjects";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
      <AnimatedBackground />
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
