import { useEffect, useRef, useState } from "react";
import SendEmail from "./SendEmail";

const Hero = () => {
  const [smoothProgress, setSmoothProgress] = useState(0);
  const targetProgress = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 450;
      const scrollValue = Math.min(window.scrollY, maxScroll);
      targetProgress.current = scrollValue / maxScroll;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      setSmoothProgress(prev => {
        const diff = targetProgress.current - prev;
        return prev + diff * 0.07;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // responsive spread for mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

  const spread = smoothProgress * (isMobile ? 80 : isTablet ? 160 : 280);

  const leftRotate = -8 + smoothProgress * 12;
  const rightRotate = 8 - smoothProgress * 12;

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-28 md:mt-32 lg:mt-36">
      <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden">

        <div
          className="relative bg-[#F24E2E] rounded-2xl md:rounded-3xl
          pt-16 md:pt-20 lg:pt-24
          pb-20 md:pb-24 lg:pb-28
          px-6 md:px-10 text-center overflow-hidden"
        >

          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">

            {/* Heading */}
            <h1
              className="text-white
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-extrabold leading-[1.1] tracking-tight"
            >
              AI Powered <br />
              Websites & Apps <br />
              for growing startups
            </h1>

            {/* Subtitle */}
            <p
              className="text-white
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              mt-4 md:mt-6 font-semibold"
            >
              Earn via{" "}
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-lg">
                ₹
              </span>{" "}
              Marketing
            </p>

            {/* Buttons */}
            <div className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6 flex-wrap">

              <SendEmail
                quote="Get Started"
                className="bg-white px-6 md:px-8 py-3 md:py-4 rounded-full
                font-semibold text-base md:text-lg
                shadow-[0_6px_0px_#000] cursor-pointer"
              />

              <button
                className="bg-white
                px-6 md:px-8
                py-3 md:py-4
                rounded-full
                font-semibold
                text-base md:text-lg
                shadow-[0_6px_0px_#000] cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </button>

            </div>

            {/* Image Stack */}
            <div
              className="
              mt-16 sm:mt-20 md:mt-24 lg:mt-28
              relative
              h-[320px] sm:h-[360px] md:h-[420px]
              flex justify-center items-end"
            >

              {/* LEFT IMAGE */}
              <div
                className="absolute z-0 transform-gpu"
                style={{
                  transform: `translateX(-${spread}px) rotate(${leftRotate}deg)`
                }}
              >
                <img
                  src="/om.jpeg"
                  className="
  w-28 sm:w-40 md:w-64
  h-40 sm:h-56 md:h-96
  object-contain
  rounded-2xl md:rounded-3xl
  border-4 border-black shadow-2xl"
                />
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="absolute z-0 transform-gpu"
                style={{
                  transform: `translateX(${spread}px) rotate(${rightRotate}deg)`
                }}
              >
                <img
                  src="/rishu.jpeg"
                  className="
  w-28 sm:w-40 md:w-64
  h-40 sm:h-56 md:h-96
  object-contain
  rounded-2xl md:rounded-3xl
  border-4 border-black shadow-2xl"
                />
              </div>

              {/* CENTER IMAGE */}
              <div className="absolute z-10">
                <img
                  src="/daksh2.jpeg"
                  className="
  w-32 sm:w-48 md:w-72
  h-44 sm:h-64 md:h-96
  object-contain
  rounded-2xl md:rounded-3xl
  border-4 border-black shadow-2xl"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;