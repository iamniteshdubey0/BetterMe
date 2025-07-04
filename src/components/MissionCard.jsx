import React from "react";
import { Images } from "../constants/constant";

const MissionCard = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div className="relative bg-primary rounded-3xl p-4 text-white w-[300px] min-h-[250px] flex flex-col items-start justify-between">
                {/* Label */}
                <span className="border border-white/80 text-white/80 text-xs px-3 py-1 rounded-full mb-4">
                    Our Mission
                </span>
                {/* Illustration Placeholder */}
                <img
                    src={Images[4]}
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 leading-tight mb-2 text-start">
                Our mission is to empower individuals to embrace their boldness and live
                authentically.
            </h3>
            <p className="text-sm md:text-md font-semibold text-foreground/70 leading-tight mb-6 text-start">
                We believe that everyone possesses unique traits and strengths that, when embraced, can lead to personal growth, fulfillment, and success.</p>
        </div>
    );
};

export default MissionCard;
