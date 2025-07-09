import React from "react";
import { HeroSection } from "../constants/constant";
import RandomDots from "../components/RandomDots";
import Scribble from "../components/Scribble";


const Hero = () => {
  return (
    <section id="hero" className="relative h-full flex-col-center px-2 md:px-4">
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 ">
        <div className="bg-dark-green h-full rounded-4xl max-sm:flex max-sm:flex-col flex-between gap-4 px-2.5 md:px-6 py-8">
          <RandomDots count={8}></RandomDots>

          <div className="flex flex-col items-start p-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-white/90 leading-tight mb-6 text-start">
              {HeroSection.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br></br>
                </React.Fragment>
              ))}
            </h1>

            <div className="flex-center gap-4 mb-4">
              <button className="solid-button bg-secondary">Start Test</button>
              <div>
                <p className="font-semibold text-3xl text-white/90">236+</p>
                <p className="text-xs text-secondary">Tests taken today</p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-white/90">98%</p>
                <p className="text-xs text-secondary">Results rated</p>
              </div>
            </div>

            <div className="bg-white text-accent w-full md:max-w-fit px-6 py-3 rounded-3xl flex items-center gap-4 shadow-lg mt-6">
              <button className="border border-accent rounded-full px-4 py-1 text-xs">
                Bold personality
              </button>
              <button className="border border-accent rounded-full px-4 py-1 text-xs">
                Self-discovery
              </button>
              <button className="border border-accent rounded-full px-4 py-1 text-xs">
                Personal growth
              </button>
            </div>
          </div>
          <div className="relative md:flex-center">
            <Scribble width={500} height={450} stroke="hsl(160, 84%, 39%)" strokeWidth={10} />
            {/* <AnimatedScribble
              width={300}
              height={200}
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={16}
              duration={4}
            /> */}
            <img
              className="object-cover w-xl h-full z-0"
              src={HeroSection.image}
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
