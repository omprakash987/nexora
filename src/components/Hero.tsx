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
    <section className="px-6 mt-50">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden">

       <div className="relative bg-[#F24E2E] rounded-3xl pt-36 pb-52 px-10 text-center overflow-hidden">


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

            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              AI Powered <br />
              Websites & Apps <br />
              for growing startups
            </h1>

            <p className="text-white text-2xl mt-6 font-semibold">
              Earn via{" "}
              <span className="bg-white text-black px-3 py-1 rounded-full text-lg">
                ₹
              </span>{" "}
              Me
            </p>

            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <button className="bg-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_6px_0px_#000]">
                Get Started
              </button>
              <button className="bg-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_6px_0px_#000]">
                Learn More
              </button>
            </div>

          <div className="mt-52 relative h-105 flex justify-center items-end">


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
                  className="w-72 h-96 object-cover rounded-3xl border-4 border-black shadow-2xl"
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
                  className="w-72 h-96 object-cover rounded-3xl border-4 border-black shadow-2xl"
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
                  src="/daksh.jpeg"
                  className="w-80 h-96 object-cover rounded-3xl border-4 border-black shadow-2xl"
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
