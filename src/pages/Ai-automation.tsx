import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Brain,
  Database,
  MessageSquare,
  Zap,
} from "lucide-react";
import SendEmail from "../components/SendEmail";
import { useEffect } from "react";

interface AIService {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: any;
}

const services: AIService[] = [
  {
    id: 1,
    title: "AI Chatbots",
    description:
      "Deploy intelligent chatbots that automate customer support and lead capture.",
    features: [
      "24/7 customer support",
      "WhatsApp / Website integration",
      "Lead qualification",
    ],
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and reduce manual work.",
    features: [
      "CRM automation",
      "Task automation",
      "Integration with APIs",
    ],
    icon: Workflow,
  },
  {
    id: 3,
    title: "AI Agents",
    description:
      "Custom AI agents that perform complex business operations autonomously.",
    features: [
      "Autonomous decision making",
      "Data analysis",
      "API integrations",
    ],
    icon: Bot,
  },
  {
    id: 4,
    title: "Data Intelligence",
    description:
      "AI powered insights and dashboards for smarter business decisions.",
    features: [
      "Predictive analytics",
      "AI dashboards",
      "Data automation",
    ],
    icon: Database,
  },
  {
    id: 5,
    title: "AI Assistants",
    description:
      "Custom AI copilots to enhance productivity across teams.",
    features: [
      "Internal AI tools",
      "Knowledge assistants",
      "Workflow copilots",
    ],
    icon: Brain,
  },
  {
    id: 6,
    title: "Process Automation",
    description:
      "Transform manual processes into automated intelligent workflows.",
    features: [
      "Sales automation",
      "Marketing automation",
      "Business automation",
    ],
    icon: Zap,
  },
];

const metrics = [
  { label: "Tasks Automated", value: "1M+" },
  { label: "Avg Productivity Boost", value: "300%" },
  { label: "Businesses Automated", value: "100+" },
];

const AiAutomation = () => {

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
          Automate Your Business with AI
        </motion.h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Use AI agents and automation workflows to eliminate repetitive work
          and scale your operations faster.
        </p>

        <SendEmail quote="Book AI Consultation" className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 cursor-pointer"
          
        />
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          AI Automation Services
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

      {/* AUTOMATION PROCESS */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our AI Automation Process
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          {["Audit", "Design Automation", "Deploy AI", "Optimize"].map(
            (step, i) => (
              <div
                key={i}
                className="bg-white px-6 py-4 rounded-lg shadow border"
              >
                {step}
              </div>
            )
          )}

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          AI Tools & Technologies
        </h2>

        <div className="flex justify-center gap-10 flex-wrap text-gray-700 text-lg">
          <span>OpenAI</span>
          <span>LangChain</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>Zapier</span>
          <span>AWS</span>
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
          AI Automation Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Starter Automation", "Business Automation", "Enterprise AI"].map(
            (plan, i) => (
              <div
                key={i}
                className="border p-8 rounded-xl text-center bg-white shadow"
              >
                <h3 className="text-xl font-semibold">{plan}</h3>

                <p className="text-3xl font-bold mt-4">
                  {i === 0 ? "₹29000" : i === 1 ? "₹49000" : "Custom"}
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
          Ready to Automate Your Business?
        </h2>

        <p className="mt-4 text-gray-300">
          Let AI handle repetitive tasks while you focus on growth.
        </p>

        <SendEmail quote="Schedule Consultation" className="mt-6 bg-indigo-600 px-8 py-3 rounded-lg cursor-pointer"/>
      </section>

    </div>
  );
};

export default AiAutomation;