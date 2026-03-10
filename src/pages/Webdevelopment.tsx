import { motion } from "framer-motion";
import {
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Database,
  FileCode,
} from "lucide-react";
import SendEmail from "../components/SendEmail";

const services = [
  {
    id: 1,
    title: "Single Page Applications",
    description:
      "High performance reactive web apps for startups and modern platforms.",
    icon: Rocket,
    features: [
      "Lightning fast UI",
      "Real-time updates",
      "Optimized performance",
    ],
    priceStartingAt: "₹25,000",
  },
  {
    id: 2,
    title: "Corporate Websites",
    description:
      "SEO optimized scalable websites designed for brands and enterprises.",
    icon: FileCode,
    features: ["SEO optimized", "Scalable architecture", "Fast loading"],
    priceStartingAt: "₹35,000",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description:
      "Custom storefronts with secure checkout and inventory management.",
    icon: ShoppingCart,
    features: [
      "Inventory Management",
      "Payment Gateways",
      "Shopify / Headless commerce",
    ],
    priceStartingAt: "₹50,000",
  },
  {
    id: 4,
    title: "SaaS Platforms",
    description:
      "Complex dashboards and cloud-native SaaS applications for scale.",
    icon: LayoutDashboard,
    features: [
      "Multi-tenant architecture",
      "User management",
      "API Integrations",
    ],
    priceStartingAt: "₹80,000",
  },
  {
    id: 5,
    title: "CMS Integration",
    description:
      "Flexible content management systems for dynamic websites.",
    icon: Database,
    features: [
      "Contentful",
      "Sanity",
      "WordPress integration",
    ],
    priceStartingAt: "₹18,000",
  },
];

const process = [
  "Discovery",
  "Design",
  "Development",
  "QA Testing",
  "Launch",
];

const Webdevelopment = () => {
  return (
    <div className="bg-white text-slate-900 mt-10">

      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-b from-indigo-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Turning Vision into Digital Reality
        </motion.h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We craft high-performance websites and web platforms that scale with
          your business.
        </p>

        <div className="mt-8 flex justify-center gap-4">
        <SendEmail quote="start a project" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 cursor-pointer" />

          
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Web Development Services
        </h2>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">

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

              <p className="mt-4 font-semibold text-indigo-600">
                Starting at {service.priceStartingAt}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Development Process
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {process.map((step, i) => (
            <div
              key={i}
              className="bg-white px-6 py-4 rounded-lg shadow border"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our Tech Stack
        </h2>

        <div className="flex justify-center gap-10 flex-wrap text-gray-700 text-lg">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
          <span>AWS</span>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          What Clients Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {["Great work!", "Highly professional team", "Amazing experience"].map(
            (t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow"
              >
                <p className="text-gray-600">"{t}"</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <details className="border p-4 rounded-lg mb-4">
          <summary className="font-semibold">
            How long does a website take?
          </summary>
          <p className="mt-2 text-gray-600">
            Typically 2–6 weeks depending on complexity.
          </p>
        </details>

        <details className="border p-4 rounded-lg">
          <summary className="font-semibold">
            Do you provide maintenance?
          </summary>
          <p className="mt-2 text-gray-600">
            Yes, we offer monthly maintenance packages.
          </p>
        </details>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold">
          Ready to Build Your Next Website?
        </h2>

        <p className="mt-4 text-indigo-100">
          Let’s create something amazing together.
        </p>

        <SendEmail quote="start a project" className="mt-6 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto cursor-pointer" />
      </section>

    </div>
  );
};

export default Webdevelopment;