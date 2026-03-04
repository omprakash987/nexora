import { useEffect, useState } from "react";
import SendEmail from "./SendEmail";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full pt-6 px-6">
        <div className="max-w-7xl mx-auto border border-dashed border-gray-400 rounded-3xl p-2">
          <div className="bg-[#f3f3f3] rounded-2xl px-10 py-5 flex items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-8 h-8 border-2 border-orange-500 rounded-md rotate-12"></div>
              <span className="text-xl font-bold tracking-tight">
                Nexora
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

              <button
                onClick={() => scrollToSection("reviews")}
                className="hover:text-black transition cursor-pointer"
              >
                Success Stories
              </button>

              <button
                onClick={() => scrollToSection("faqs")}
                className="hover:text-black transition cursor-pointer"
              >
                FAQs
              </button>

              {/* Clean Schedule Button */}
              <SendEmail quote="Schedule a demo ›" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
