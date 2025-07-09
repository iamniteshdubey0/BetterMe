import React from "react";
import { MissionSection } from "../constants/constant";
import { PersonStanding } from "lucide-react";
import MissionCard from "../components/MissionCard";
import { Images } from "../constants/constant";
import RandomDots from "../components/RandomDots";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex-col-center px-2 md:px-4 mt-6 bg-gradient-to-b from-background to-primary/20"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10">
        <div className="flex-between px-12 py-3">
          <h1 className="text-xl md:text-3xl font-semibold text-foreground/90 leading-tight mb-6 text-start">
            {MissionSection.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br></br>
              </React.Fragment>
            ))}
          </h1>
          <span className="text-primary">
            <PersonStanding size={64}></PersonStanding>
          </span>
        </div>
        <div className="flex max-sm:flex-col justify-center space-x-16 px-12 mb-12">
          <div className="">
            <span className="text-primary">
              <PersonStanding size={64}></PersonStanding>
            </span>
          </div>
          <div className="md:flex-center space-x-2 space-y-4">
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
            <MissionCard></MissionCard>
          </div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 my-24">
          <RandomDots count={4}></RandomDots>
          <div className="">
            <img
              src={Images[0]}
              alt="Our Mission"
              className="w-full h-full object-cover transform -translate-y-12"
            />
          </div>
          <div className="flex-center col-span-2">
            <h3 className="text-xl md:text-3xl font-semibold text-foreground/90 leading-tight mb-2 text-start">
              {MissionSection.quote.text}
            </h3>
          </div>
          <div className="">
            <img
              src={Images[2]}
              alt="Our Mission"
              className="w-full h-full object-cover transform translate-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
