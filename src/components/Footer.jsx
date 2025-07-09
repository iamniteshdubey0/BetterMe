import React from "react";
import { Images } from "../constants/constant";
import { PersonStandingIcon } from "lucide-react";
import RandomDots from "../components/RandomDots";

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative bottom-0 flex-col-center px-4 md:px-4 bg-dark-green mt-6 pt-8"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 space-y-4">
          <div className="relative flex flex-col col-span-2 justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white/80 leading-tight mb-2 text-start">
              We believe that everyone possesses unique traits and strengths
              that
            </h3>
            <RandomDots count={3}></RandomDots>
            <img src={Images[2]} alt="h" className="w-42 h-42 object-cover" />
          </div>
          <div className="flex flex-col justify-center md:items-center gap-6">
            <div className="flex flex-col justify-center items-start">
              <a
                href=""
                className="text-sm md:text-lg font-semibold text-white/80 leading-tight mb-2 text-start"
              >
                Home
              </a>
              <a
                href=""
                className="text-sm md:text-lg font-semibold text-white/80 leading-tight mb-2 text-start"
              >
                Personality Types
              </a>

              <a
                href=""
                className="text-sm md:text-lg font-semibold text-white/80 leading-tight mb-2 text-start"
              >
                Teams
              </a>
              <a
                href=""
                className="text-sm md:text-lg font-semibold text-white/80 leading-tight mb-2 text-start"
              >
                Resources
              </a>
            </div>
            <div className="flex flex-col justify-center items-start ">
              <div className="flex items-start gap-4">
                <PersonStandingIcon
                  className="text-primary"
                  size={46}
                ></PersonStandingIcon>
                <span className="md:text-lg font-semibold text-white/80">
                  BetterMe
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around items-end gap-6">
            <div className="flex flex-col justify-center items-end">
              <span className="font-semibold text-white/80">2023</span>
            </div>
            <div className="flex flex-col justify-center items-start ">
              <div className="flex items-start gap-4">
                <PersonStandingIcon
                  className="text-primary"
                  size={24}
                ></PersonStandingIcon>
                <PersonStandingIcon
                  className="text-primary"
                  size={24}
                ></PersonStandingIcon>
                <PersonStandingIcon
                  className="text-primary"
                  size={24}
                ></PersonStandingIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
