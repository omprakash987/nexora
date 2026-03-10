"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "100+", label: "Creators" },
  { number: "15+", label: "Countries served" },
  { number: "60k+", label: "User signups" },
  { number: "10k+", label: "Live streams per year" },
  { number: "₹10 lakshs+", label: "Earned by creators" },
]

export default function StatsSection() {
  return (
    <section className="bg-gray-200 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We let the <br />
            <span className="text-orange-500">numbers</span> talk
          </h2>

          <p className="mt-6 text-gray-700 text-lg">
            One platform, boundless possibilities for creators
          </p>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-600 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
