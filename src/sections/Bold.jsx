import { AppleIcon, PlaySquare, ThumbsUp } from "lucide-react";
import React from "react";
import { BoldnessTraitsSection } from "../constants/constant";
import { Images } from "../constants/constant";

const Bold = () => {
  return (
    <section
      id="persnality"
      className="relative flex-col-center px-2 md:px-4 bg-background"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-4xl font-semibold text-dark-green leading-tight mb-2 text-start">
              {BoldnessTraitsSection.title}
            </h3>
            <p className="text-sm md:text-md font-semibold text-foreground/70 leading-tight mb-6 text-start mt-6">
              We believe that everyone possesses unique traits and strengths
              that, when embraced, can lead to personal growth, fulfillment, and
              success.
            </p>
            <div className="flex justify-start items-center gap-6 mb-6">
              <div className="flex-between gap-2">
                <PlaySquare size={28}></PlaySquare>
                <span className="font-semibold">PlayStore</span>
              </div>

              <div className="flex-between gap-2">
                <AppleIcon size={28}></AppleIcon>
                <span className="font-semibold">AppStore</span>
              </div>
            </div>
            <a className="solid-button w-fit cursor-pointer">Download Now</a>
          </div>

          <div className="flex flex-col justify-start">
            <span className="border border-dark-green/80 text-dark-green/80 text-xs px-3 py-1 rounded-full max-w-fit mb-4">
              Our Mission
            </span>
            <div className="grid grid-cols-2 place-items-start p-2 gap-6">
              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>

              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>

              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>

              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>

              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>

              <div className="flex-center gap-3">
                <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                  <ThumbsUp></ThumbsUp>
                </span>
                <span className="text-sm font-bold">Confidance</span>
              </div>
            </div>
            <img
              src={Images[1]}
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bold;
