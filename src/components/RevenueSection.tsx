import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Website Development",
    route: "/web-development",
    desc: "Business Website (5–10 pages), Landing Pages, Portfolio Websites",
    img: "/webdev.jpg",
  },

  {
    title: "Digital Marketing",
    route: "/digital-marketing",
    desc: "Instagram Ads, Facebook Ads, Google Ads, Lead generation campaigns",
    img: "/digitalmarketing.jpg",
  },

  {
    title: "Branding Services",
    route: "/branding-services",
    desc: "Logo design, Brand identity, Color system, Typography guide, Brand strategy",
    img: "/brand.webp",
  },

  {
    title: "AI Automation",
    route: "/ai-automation",
    desc: "Automate your business using AI",
    img: "/ai.avif",
  },
];

const RevenueSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#f5f5f5]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our <span className="text-[#F24E2E]">Services</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Unlock your content's full potential, reap the rewards
        </p>

        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className="cursor-pointer bg-gray-200 rounded-2xl md:rounded-3xl p-5 sm:p-6 
              hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="h-40 sm:h-44 md:h-48 rounded-2xl mb-4 sm:mb-6 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold">
                {card.title}
              </h3>

              {card.desc && (
                <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RevenueSection;