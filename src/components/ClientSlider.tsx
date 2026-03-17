import React from "react";

type Company = {
  logo: string;
  review: string;
};

const companies: Company[] = [
  { logo: "/logos/google.png", review: "Outstanding website delivery with smooth performance and modern user experience design." },
  { logo: "/logos/amazon.png", review: "Highly professional development team delivering scalable solutions with great attention to detail." },
  { logo: "/logos/netflix.png", review: "Exceptional UI quality with seamless animations and visually engaging user interface components." },
  { logo: "/logos/meta.png", review: "Excellent support team ensuring quick responses and efficient problem solving throughout development." },
  { logo: "/logos/tesla.png", review: "Innovative web solutions with high performance, responsiveness, and clean structured architecture." },
  { logo: "/logos/adobe.png", review: "Highly recommended for creative designs, smooth workflows, and professional client communication." },
  { logo: "/logos/spotify.png", review: "Clean and modern design approach with intuitive layouts and engaging user interactions." },
  { logo: "/logos/airbnb.png", review: "Smooth development process with timely delivery and strong focus on user experience." },
  { logo: "/logos/shopify.png", review: "Professional team delivering high quality eCommerce solutions with reliable performance and scalability." },
  { logo: "/logos/microsoft.png", review: "Delivered beyond expectations with robust features, clean design, and excellent usability." }
];

const ClientSlider: React.FC = () => {
  return (
    <div className="overflow-hidden w-[90%] mx-auto my-[70px] py-10 bg-gradient-to-br from-white to-[#fff3e8] rounded-[20px]">

      <div className="flex w-[calc(260px*20)] animate-[scroll_40s_linear_infinite]">

        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="w-[260px] h-[300px] mx-[25px] p-[30px] bg-white rounded-[20px] shadow-[0_12px_30px_rgba(255,115,0,0.15)] text-center transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_18px_45px_rgba(255,115,0,0.3)]"
          >
            <img
              src={company.logo}
              alt="company logo"
              className="w-[120px] mx-auto mt-[10px] mb-[15px] object-contain"
            />

            <p className="text-[16px] text-gray-700 mt-[15px]">
              "{company.review}"
            </p>
          </div>
        ))}

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default ClientSlider;