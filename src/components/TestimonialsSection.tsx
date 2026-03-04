"use client"

const reviews = [
  {
    name: "Sunil Nain",
    title: "BeWise Classes, 400K+ Followers",
    text: "Nexora has been an incredible partner. Their dedication and support truly set them apart.",
  },
  {
    name: "Chandan Kumar",
    title: "Chandan Logics, 800K+ Subscribers",
    text: "I’m incredibly grateful for their commitment to excellence and attention to detail.",
  },
  {
    name: "Ankit Bhati",
    title: "Rojgar with Ankit, 12M+ Subscribers",
    text: "Exceptional work in developing my applications and website. Highly recommended.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-gray-100 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Don’t just take <br />
            our <span className="text-orange-500">word</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Read what our clients have to say
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6 h-125 relative">

          {/* COLUMN 1 (Top to Bottom) */}
          <div className="overflow-hidden h-125">
  <div className="scroll-down flex flex-col gap-6">
    {[...reviews, ...reviews].map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </div>
</div>


           
         <div className="overflow-hidden h-125">
  <div className="scroll-up flex flex-col gap-6">
    {[...reviews, ...reviews].map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h4 className="font-semibold">{review.name}</h4>
      <p className="text-sm text-gray-500">{review.title}</p>
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {review.text}
      </p>
    </div>
  )
}
