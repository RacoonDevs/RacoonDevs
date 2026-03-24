import AnimatedBackground from "./AnimatedBackground";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({ children }) => (
  <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
    <AnimatedBackground />
    <Header />
    <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
