import React from "react";

const Testimonials = () => {
  return (
    <section className="relative flex-col-center px-2 md:px-4 bg-background">
      <div className="conatiner w-full mx-auto text-center z-10 max-w-5xl h-full rounded-4xl px-2.5 md:px-6 py-8">
        <div className="relative rounded-3xl bg-dark-green overflow-hidden px-4 py-16 md:py-24 text-center text-white">
          {/* Radial Gradient Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-[600px] h-[600px] rounded-full shadow-2xl"
              style={{
                background: `radial-gradient(circle, hsl(var(--secondary)) 0%, hsl(var(--dark-green)) 100%)`,
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-sm uppercase tracking-wider border border-white/40 rounded-full px-4 py-1 inline-block">
              Testimonial
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              "Bold helped me recognize my strengths and step outside my comfort
              zone. I'm now living a more fulfilling and adventurous life."
            </h2>

            <div className="flex flex-col items-center space-y-2 mt-8">
              <h4 className="font-bold">Amber Augustin</h4>
              <p className="text-sm text-white/70">Adventurer (ISFP-A)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
