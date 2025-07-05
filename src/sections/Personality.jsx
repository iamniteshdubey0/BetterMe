import React from "react";
import { Images } from "../constants/constant";

const Personality = () => {
  return (
    <section
      id="persnality"
      className="relative flex-col-center px-2 md:px-4 mt-18 bg-background"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-dark-green rounded-3xl h-3/4 p-2 flex-center overflow-hidden">
            <img className=" object-cover" src={Images[2]} alt="" />
          </div>
          <div className="">
            <div className="relative bg-primary rounded-3xl p-4 text-white h-3/4 flex flex-col items-start overflow-hidden">
              {/* Label */}
              <span className="border border-white/80 text-white/80 text-xs px-3 py-1 rounded-full mb-4">
                Our Mission
              </span>
              {/* Illustration Placeholder */}
              <h3 className="text-xl md:text-2xl font-semibold text-white/80 leading-tight mb-2 text-start">
                Our mission is to empower individuals to embrace their boldness
                and live authentically.
              </h3>
              <a
                className="absolute bottom-5 text-sm font-semibold px-4 py-3 border border-white/80 rounded-full hover:border-white hover:scale-95 transition-all duration-300"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personality;
