import { Route, Routes } from "react-router-dom";
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
import Webdevelopment from "./pages/Webdevelopment";
import DigitalMarketing from "./pages/Digital-marketing";
import AiAutomation from "./pages/Ai-automation";
import BrandingServices from "./pages/Brand-service";

function HomePage() {
  return (
    <div className="overflow-auto">
      <Hero />
      <BuildSection />
      <RevenueSection />
      <TechStackSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
   </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<Webdevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
         <Route path="/Ai-automation" element={<AiAutomation />} />
          <Route path="/Branding-services" element={<BrandingServices />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;