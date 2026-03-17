import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  PenTool,
  Sparkles,
  BadgeCheck,
  Megaphone,
} from "lucide-react";
import SendEmail from "../components/SendEmail";
import { useEffect } from "react";

interface BrandingService {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: any;
}

const services: BrandingService[] = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "Create memorable and timeless logos that define your brand identity.",
    features: [
      "Custom logo concepts",
      "Vector formats",
      "Brand color system",
    ],
    icon: Palette,
  },
  {
    id: 2,
    title: "Brand Identity",
    description:
      "Complete visual identity systems for consistent brand communication.",
    features: [
      "Typography system",
      "Color palette",
      "Brand guidelines",
    ],
    icon: Layers,
  },
  {
    id: 3,
    title: "Brand Strategy",
    description:
      "Strategic positioning that differentiates your brand from competitors.",
    features: [
      "Market research",
      "Competitor analysis",
      "Brand positioning",
    ],
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Visual Design",
    description:
      "Design systems for websites, marketing materials, and digital presence.",
    features: [
      "UI visual style",
      "Design systems",
      "Creative assets",
    ],
    icon: PenTool,
  },
  {
    id: 5,
    title: "Brand Messaging",
    description:
      "Develop a powerful brand voice and messaging strategy.",
    features: [
      "Taglines",
      "Brand storytelling",
      "Content voice",
    ],
    icon: Megaphone,
  },
  {
    id: 6,
    title: "Brand Consistency",
    description:
      "Ensure your brand remains consistent across all channels.",
    features: [
      "Brand guidelines",
      "Design standards",
      "Asset management",
    ],
    icon: BadgeCheck,
  },
];

const metrics = [
  { label: "Brands Built", value: "120+" },
  { label: "Brand Reach", value: "50M+" },
  { label: "Avg Brand Growth", value: "400%" },
];

const BrandingServices = () => {

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
          Build a Brand That People Remember
        </motion.h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We create powerful brand identities that connect with audiences and
          drive long-term business growth.
        </p>

        <SendEmail quote="Start Your Brand Journey" className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"/>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Branding Services
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

      {/* BRAND PROCESS */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Branding Process
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          {[
            "Research",
            "Brand Strategy",
            "Design Identity",
            "Launch & Scale",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white px-6 py-4 rounded-lg shadow border"
            >
              {step}
            </div>
          ))}

        </div>
      </section>

      {/* BRAND ELEMENTS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Brand Elements We Create
        </h2>

        <div className="flex justify-center gap-10 flex-wrap text-gray-700 text-lg">
          <span>Logo</span>
          <span>Typography</span>
          <span>Color System</span>
          <span>Brand Guidelines</span>
          <span>Visual Identity</span>
        </div>
      </section>

      {/* METRICS */}
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
          Branding Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Starter Brand", "Business Brand", "Enterprise Brand"].map(
            (plan, i) => (
              <div
                key={i}
                className="border p-8 rounded-xl text-center bg-white shadow"
              >
                <h3 className="text-xl font-semibold">{plan}</h3>

                <p className="text-3xl font-bold mt-4">
                  {i === 0 ? "₹1499" : i === 1 ? "₹49000" : "Custom"}
                </p>

                <SendEmail quote="Get Started" className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded cursor-pointer" />
              </div>
            )
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Build Your Brand?
        </h2>

        <p className="mt-4 text-gray-300">
          Let’s craft a brand that stands out in your market.
        </p>

        <SendEmail quote="Start Branding" className="mt-6 bg-indigo-600 px-8 py-3 rounded-lg"/>
      </section>

    </div>
  );
};

export default BrandingServices;