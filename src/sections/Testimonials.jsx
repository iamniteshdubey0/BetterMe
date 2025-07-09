import RandomDots from "../components/RandomDots";
import { TestimonialSection } from "../constants/constant";

const Testimonials = () => {
  return (
    <section className="relative flex-col-center px-2 md:px-4 bg-background">
      <div className="conatiner w-full mx-auto text-center z-10 max-w-5xl h-full rounded-4xl px-2.5 md:px-6 py-8">
        <div className="relative rounded-3xl bg-dark-green overflow-hidden px-4 py-12 md:py-24 text-center text-white">
          <RandomDots count={8}></RandomDots>
          {/* Radial Gradient Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center relative w-[600px] h-[600px] rounded-full shadow-2xl bg-gradient-to-bl from-dark-green/10 to-dark-green">
              <div className="relative w-[300px] h-[300px] rounded-full shadow-2xl bg-gradient-to-bl from-dark-green/10 to-dark-green"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <span className="border border-white/80 text-white/80 text-xs px-3 py-1 rounded-full">
              {TestimonialSection.title}
            </span>

            <h2 className="text-xl md:text-2xl font-semibold leading-relaxed mt-8">
              {TestimonialSection.quote}
            </h2>

            <div className="flex flex-col items-center space-y-2 mt-4">
              <img
                className="w-30 h-30 rounded-full"
                src="https://api.dicebear.com/9.x/lorelei/svg"
                alt=""
              />
              <h4 className="font-bold">Amber Augustin</h4>
              <p className="text-sm text-white/70">Adventurer (ISFP-A)</p>
            </div>

            <div className="absolute flex flex-col items-center top-16">
              <img
                className="w-16 h-16 rounded-full"
                src="https://api.dicebear.com/9.x/lorelei/svg"
                alt=""
              />
            </div>

            <div className="absolute flex flex-col items-center right-10">
              <img
                className="w-12 h-12 rounded-full"
                src="https://api.dicebear.com/9.x/lorelei/svg"
                alt=""
              />
            </div>

            <div className="absolute flex flex-col items-center bottom-2 left-24">
              <img
                className="w-16 h-16 rounded-full"
                src="https://api.dicebear.com/9.x/lorelei/svg"
                alt=""
              />
            </div>

            <div className="absolute flex flex-col items-center right-16 -top-5">
              <img
                className="w-12 h-12 rounded-full"
                src="https://api.dicebear.com/9.x/lorelei/svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
