import React from "react";
import RandomDots from "../components/RandomDots";

const Cta = () => {
  return (
    <section
      id="persnality"
      className="relative flex-col-center px-2 md:px-4 mt-18 bg-background py-6 md:py-12"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="relative bg-accent rounded-3xl px-12 py-6 flex flex-col gap-6 md:gap-4 overflow-hidden">
          <RandomDots count={4}></RandomDots>
          <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
            "Bold helped me recognize my strengths and step outside my comfort
            zone. I'm now living a more fulfilling and adventurous life."
          </h2>
          <a className="solid-button bg-secondary max-sm:place-self-center place-self-end w-fit cursor-pointer">
            Start Test
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
