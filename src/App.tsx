import BuildSection from "./components/BuildSection";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RevenueSection from "./components/RevenueSection";
import StatsSection from "./components/StatsSection";
import TechStackSection from "./components/TechStackSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BuildSection/>
      <RevenueSection/>
      <TechStackSection/>
      <StatsSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <CtaSection/>
      <Footer/>

    </>
  );
}

export default App;
