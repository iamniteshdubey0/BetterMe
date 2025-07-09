import React from "react";
import { Images } from "../constants/constant";

const MissionCard = ({ title, heading, description }) => {
  return (
    <div className="flex flex-col space-y-6 px-1">
      <div className="relative bg-primary rounded-3xl p-4 text-white w-[300px] min-h-[250px] flex flex-col items-start justify-between">
        {/* Label */}
        <span className="border border-white/80 text-white/80 text-xs px-3 py-1 rounded-full mb-4">
          {title}
        </span>
        {/* Illustration Placeholder */}
        <img
          src={Images[4]}
          alt="Our Mission"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="px-2 text-xl md:text-2xl font-semibold text-foreground/90 leading-tight mb-2 text-start">
        {heading}
      </h3>
      <p className="px-2 text-sm md:text-md font-semibold text-foreground/70 leading-tight mb-6 text-start">
        {description}
      </p>
    </div>
  );
};

export default MissionCard;
