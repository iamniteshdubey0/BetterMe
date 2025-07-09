import React from "react";
import { Images } from "../constants/constant";
import Scribble from "../components/Scribble";
import { PersonalityTypesSection } from "../constants/constant";

const Personality = () => {
  return (
    <section
      id="persnality"
      className="relative flex-col-center px-2 md:px-4 mt-18 bg-background"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative col-span-2 bg-dark-green rounded-3xl p-2 flex-center overflow-hidden">
            <Scribble
              width={800}
              height={700}
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={10}
            />
            <Scribble
              width={500}
              height={1200}
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={10}
            />
            <img className="z-20 object-cover" src={Images[2]} alt="" />
          </div>
          <div className="h-full">
            <div className="relative bg-primary rounded-3xl p-4 md:min-h-full text-white flex flex-col items-start overflow-hidden gap-6">
              {/* Label */}
              <Scribble
                width={400}
                height={700}
                stroke="hsl(40, 72%, 57%)"
                strokeWidth={10}
              />
              <span className="border border-white/80 text-white/80 text-xs px-3 py-1 rounded-full mb-4">
                {PersonalityTypesSection.label}
              </span>
              {/* Illustration Placeholder */}
              <h3 className="text-xl md:text-2xl font-semibold text-white/80 leading-tight mb-2 text-start">
                {PersonalityTypesSection.title}
              </h3>
              <a
                className="md:absolute md:bottom-5 text-sm font-semibold px-4 py-3 border border-white/80 rounded-full hover:border-white hover:scale-95 transition-all duration-300"
                href=""
              >
                {PersonalityTypesSection.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personality;
