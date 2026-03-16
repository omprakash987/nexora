import React from "react";

type Company = {
  logo: string;
  review: string;
};

const companies: Company[] = [
  { logo: "/logos/google.png", review: "Amazing website delivery!" },
  { logo: "/logos/amazon.png", review: "Professional development team." },
  { logo: "/logos/netflix.png", review: "High quality UI." },
  { logo: "/logos/meta.png", review: "Excellent support." },
  { logo: "/logos/tesla.png", review: "Great web solutions." },
  { logo: "/logos/adobe.png", review: "Highly recommended." },
  { logo: "/logos/spotify.png", review: "Clean modern design." },
  { logo: "/logos/airbnb.png", review: "Smooth development process." },
  { logo: "/logos/shopify.png", review: "Professional team." },
  { logo: "/logos/microsoft.png", review: "Delivered beyond expectations." }
];

const ClientSlider: React.FC = () => {
  return (
    <div className="overflow-hidden w-[90%] mx-auto my-[70px] py-10 bg-gradient-to-br from-white to-[#fff3e8] rounded-[20px]">

      <div className="flex w-[calc(340px*20)] animate-[scroll_30s_linear_infinite]">

        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="w-[340px] mx-[25px] p-[30px] bg-white rounded-[20px] shadow-[0_12px_30px_rgba(255,115,0,0.15)] text-center transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_18px_45px_rgba(255,115,0,0.3)]"
          >
            <img
              src={company.logo}
              alt="company logo"
              className="w-[120px] mx-auto mb-[15px] object-contain"
            />

            <p className="text-[15px] text-gray-700">
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