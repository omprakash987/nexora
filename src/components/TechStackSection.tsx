"use client"

import { motion } from "framer-motion"

const layers = [
  "bg-red-500 rotate-3",
  "bg-orange-400 -rotate-2",
  "bg-pink-200 rotate-2",
  "bg-red-400 -rotate-3",
  "bg-gradient-to-r from-purple-500 to-pink-500 rotate-1",
]

export default function TechStackSection() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          The <span className="text-orange-500">Complete Tech Stack</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT STACK */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-80">

              {layers.map((style, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{ y: -10 }}
                  className={`absolute left-0 w-full h-16 rounded-2xl ${style}`}
                  style={{ top: `${index * 60}px` }}
                />
              ))}

            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-8 text-lg font-medium text-gray-700">

            {[
              "Website",
              "iOS App",
              "Android App",
              "Content Security",
              "Mac/Desktop App",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1 border-b border-gray-400"></div>
                <span>{item}</span>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
