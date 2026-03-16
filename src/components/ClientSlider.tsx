import React from "react";
import "./ClientSlider.css";

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
    <div className="slider">
      <div className="slide-track">
        {[...companies, ...companies].map((company, index) => (
          <div className="slide" key={index}>
            <img src={company.logo} alt="company logo" className="logo" />
            <p>"{company.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;