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
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="w-full pt-4 md:pt-6 px-4 md:px-6">

        {/* Increased Width */}
        <div className="max-w-[1600px] mx-auto border border-dashed border-gray-400 rounded-2xl md:rounded-3xl p-1 md:p-2">

          <div className="bg-[#f3f3f3] rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-10 py-3 md:py-5 flex items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="w-8 h-8 md:w-10 md:h-10 border-2 rounded-md"
                src="/nexoralogo.png"
                alt="nexoralogo"
              />
              <span className="text-lg md:text-3xl font-bold tracking-tight">
                Nexora
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 font-medium text-sm lg:text-base">

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

              <SendEmail
                quote="Schedule a demo ›"
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition cursor-pointer"
              />

            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <SendEmail quote="Demo" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;