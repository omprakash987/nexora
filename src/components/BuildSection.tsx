const BuildSection = () => {
  return (
    <section className="py-28 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your <span className="text-[#F24E2E]">Own</span> Brand
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Turn your audience into a thriving community without any coding
            skills, with a digital platform that's unique
          </p>

          <button className="mt-8 bg-[#F24E2E] hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition">
            Get Started
            <span className="text-xl">›</span>
          </button>
        </div>

         
        <div className="relative bg-white rounded-3xl p-6 shadow-lg">

          
          <div className="absolute left-6 top-6 w-44 h-72 rounded-2xl bg-linear-to-b from-red-500 to-purple-600"></div>

           
          <div className="ml-28 border-2 border-orange-400 rounded-2xl overflow-hidden">

            <video
              src="/demo.mp4"    
              controls
              className="w-full h-64 object-cover rounded-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default BuildSection;
