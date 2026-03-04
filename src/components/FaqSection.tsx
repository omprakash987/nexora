import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Nexora offer?",
    answer:
      "We provide website development, mobile app development, branding, and ongoing technical support tailored to your business needs.",
  },
  {
    question: "Do I need technical expertise to use Nexora services?",
    answer:
      "No, our team handles everything from design to deployment. You just focus on your business.",
  },
  {
    question: "How long does it take to create a website or application?",
    answer:
      "Project timelines depend on complexity, but typically 2-6 weeks for websites and 4-10 weeks for applications.",
  },
  {
    question: "Can I request changes after launch?",
    answer:
      "Yes, we offer post-launch support and maintenance plans for updates and improvements.",
  },
  {
    question: "What kind of support is available after launch?",
    answer:
      "We provide continuous monitoring, bug fixes, feature upgrades, and performance optimization.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-bold ">FAQs</h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
              >
                <span className="font-medium text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
