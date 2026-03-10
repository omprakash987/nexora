import SendEmail from "./SendEmail";

const BuildSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <SendEmail quote="Get started" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" />

          <p className="mt-4 md:mt-6 text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Turn your audience into a thriving community without any coding
            skills, with a digital platform that's unique
          </p>

          <SendEmail quote=" Get Started" className="mt-6 md:mt-8 bg-[#F24E2E] hover:bg-orange-600 text-white 
          px-6 sm:px-8 py-3 sm:py-4 
          rounded-full text-base sm:text-lg font-semibold 
          flex items-center gap-2 transition mx-auto md:mx-0 cursor-pointer"
           
             
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-lg">

          {/* gradient card */}
          <div className="absolute 
          left-4 sm:left-6 
          top-4 sm:top-6 
          w-32 sm:w-40 md:w-44 
          h-52 sm:h-64 md:h-72 
          rounded-2xl 
          bg-gradient-to-b from-red-500 to-purple-600">
          </div>

          {/* video container */}
          <div className="ml-20 sm:ml-24 md:ml-28 border-2 border-orange-400 rounded-2xl overflow-hidden">

            <video
              src="/nexoravideo.mp4"
              controls
              className="w-full 
              h-48 sm:h-56 md:h-64 
              object-cover rounded-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default BuildSection;