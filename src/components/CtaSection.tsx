export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-orange-600 py-28 px-6 text-center">

      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-125 h-125 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Ignite Your Digital Journey <br />
          Take the{" "}
          <span className="relative inline-block">
            <span className="bg-yellow-400 px-4 py-1 rounded-full text-black relative z-10">
              Leap
            </span>
            <span className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1 z-0"></span>
          </span>{" "}
          Today!
        </h2>

        {/* Button */}
        <div className="mt-12">
          <button className="relative bg-gray-200 text-black px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">
              Let's build your App and Website today!
            </span>

            {/* Shadow layer */}
            <span className="absolute inset-0  rounded-full translate-x-2 translate-y-2 -z-10"></span>
          </button>
        </div>

      </div>
    </section>
  )
}
