import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Target,
  Mail,
  Users,
  BarChart3,
} from "lucide-react";
import SendEmail from "../components/SendEmail";
import { useEffect } from "react";

interface MarketingService {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: any;
}

const services: MarketingService[] = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description:
      "Improve organic rankings and drive long-term traffic with technical and content SEO.",
    features: [
      "Technical SEO Audits",
      "On-page & Off-page SEO",
      "Backlink Strategy",
      "Local SEO",
    ],
    icon: Search,
  },
  {
    id: 2,
    title: "PPC & Paid Advertising",
    description:
      "High converting advertising campaigns across Google, Meta and retargeting networks.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Retargeting Campaigns",
      "Bid Management",
    ],
    icon: Target,
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engagement across major social platforms.",
    features: [
      "Content Calendar",
      "Engagement Growth",
      "Community Management",
    ],
    icon: Users,
  },
  {
    id: 4,
    title: "Content Marketing",
    description:
      "Strategic content creation designed to attract and convert customers.",
    features: [
      "Blog Strategy",
      "Video Scripts",
      "Whitepapers",
      "Brand Storytelling",
    ],
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Email Marketing",
    description:
      "Automated email flows that nurture leads and increase retention.",
    features: [
      "Newsletter Automation",
      "Drip Campaigns",
      "Customer Retention",
    ],
    icon: Mail,
  },
  {
    id: 6,
    title: "Conversion Optimization",
    description:
      "Turn more visitors into customers with CRO experiments.",
    features: [
      "A/B Testing",
      "Heatmaps",
      "UX Improvements",
    ],
    icon: TrendingUp,
  },
];

const metrics = [
  { label: "Average ROI", value: "500%" },
  { label: "Leads Generated", value: "10M+" },
  { label: "Active Clients", value: "50+" },
];

const DigitalMarketing = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 mt-10">

      {/* HERO */}
      <section className="py-28 text-center bg-linear-to-b from-indigo-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Scale Your Revenue, Not Just Traffic
        </motion.h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Data-driven marketing strategies designed to generate leads,
          increase conversions, and grow your business.
        </p>

         <SendEmail quote="Get free markeding audit" className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded cursor-pointer " />
      </section>

      {/* SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Digital Marketing Services
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <service.icon className="text-indigo-600 mb-4" size={28} />

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {service.description}
              </p>

              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {service.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Marketing Process
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          {["Analyze", "Execute", "Optimize"].map((step, i) => (
            <div
              key={i}
              className="bg-white px-6 py-4 rounded-lg shadow border"
            >
              {step}
            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8">

          {metrics.map((m, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">{m.value}</h3>
              <p className="mt-2">{m.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Marketing Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Starter", "Professional", "Enterprise"].map((plan, i) => (
            <div
              key={i}
              className="border p-8 rounded-xl text-center bg-white shadow"
            >
              <h3 className="text-xl font-semibold">{plan}</h3>

              <p className="text-3xl font-bold mt-4">
                {i === 0 ? "₹15000" : i === 1 ? "₹30000" : "Custom"}
              </p>

               <SendEmail quote="Get Started" className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded cursor-pointer" />
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-4 text-gray-300">
          Let’s build a marketing strategy that drives real revenue.
        </p>

        <SendEmail quote="Start Marketing" className="mt-6 bg-indigo-600 px-8 py-3 rounded-lg cursor-pointer"/>
      </section>

    </div>
  );
};

export default DigitalMarketing;