import { useEffect, useRef, useState } from "react";

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
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  const spread = smoothProgress * 280;    
  const leftRotate = -5 - smoothProgress * 35;
  const rightRotate = 5 + smoothProgress * 35;
  const centerScale = 1 + smoothProgress * 0.08;

  return (
   <section className="px-4 sm:px-6 lg:px-8 mt-32 md:mt-40 lg:mt-50">
  <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden">

    <div className="relative bg-[#F24E2E] rounded-2xl md:rounded-3xl 
    pt-24 md:pt-32 lg:pt-36 
    pb-36 md:pb-44 lg:pb-52 
    px-6 md:px-10 text-center overflow-hidden">

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
        <h1 className="text-white 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold leading-tight">

          AI Powered <br />
          Websites & Apps <br />
          for growing startups
        </h1>

        {/* Subtitle */}
        <p className="text-white 
        text-lg sm:text-xl md:text-2xl 
        mt-4 md:mt-6 font-semibold">

          Earn via{" "}
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-lg">
            ₹
          </span>{" "}
          Me
        </p>

        {/* Buttons */}
        <div className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6 flex-wrap">

          <button className="bg-white 
          px-6 md:px-8 
          py-3 md:py-4 
          rounded-full 
          font-semibold 
          text-base md:text-lg 
          shadow-[0_6px_0px_#000]">

            Get Started
          </button>

          <button className="bg-white 
          px-6 md:px-8 
          py-3 md:py-4 
          rounded-full 
          font-semibold 
          text-base md:text-lg 
          shadow-[0_6px_0px_#000]">

            Learn More
          </button>

        </div>

        {/* Image Stack */}
        <div className="
        mt-28 sm:mt-36 md:mt-44 lg:mt-52 
        relative 
        h-[320px] sm:h-[360px] md:h-[420px] lg:h-[420px] 
        flex justify-center items-end">

          {/* LEFT */}
          <div
            className="absolute"
            style={{
              transform: `
                translateX(-${spread}px)
                rotate(${leftRotate}deg)
              `
            }}
          >
            <img
              src="/om.jpeg"
              className="
              w-40 sm:w-52 md:w-64 lg:w-72
              h-60 sm:h-72 md:h-88 lg:h-96
              object-cover rounded-3xl 
              border-4 border-black shadow-2xl"
            />
          </div>

          {/* RIGHT */}
          <div
            className="absolute"
            style={{
              transform: `
                translateX(${spread}px)
                rotate(${rightRotate}deg)
              `
            }}
          >
            <img
              src="/rishu.jpeg"
              className="
              w-40 sm:w-52 md:w-64 lg:w-72
              h-60 sm:h-72 md:h-88 lg:h-96
              object-cover rounded-3xl 
              border-4 border-black shadow-2xl"
            />
          </div>

          {/* CENTER */}
          <div
            className="absolute z-10"
            style={{
              transform: `scale(${centerScale})`
            }}
          >
            <img
              src="/daksh2.jpeg"
              className="
              w-48 sm:w-60 md:w-72 lg:w-80
              h-64 sm:h-80 md:h-96
              object-cover rounded-3xl 
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
