import { AppleIcon, PlaySquare, ThumbsUp } from "lucide-react";
import { BoldnessTraitsSection } from "../constants/constant";
import { Images } from "../constants/constant";

const Bold = () => {
  return (
    <section
      id="persnality"
      className="relative flex-col-center px-4 md:px-4 bg-background mt-12"
    >
      <div className="conatiner w-full md:max-w-4x mx-auto text-center z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-10">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-4xl font-semibold text-dark-green leading-tight mb-2 text-start">
              {BoldnessTraitsSection.title}
            </h3>
            <p className="text-sm md:text-md font-semibold text-foreground/70 leading-tight mb-6 text-start md:mt-6 mt-3">
              {BoldnessTraitsSection.description}
            </p>
            <div className="flex justify-center md:justify-start items-center gap-6 my-8">
              {BoldnessTraitsSection.appDownload.avail.map((item, key) => (
                <div key={key} className="flex-between gap-2">
                  {item.icon}
                  <span className="font-semibold">{item.platform}</span>
                </div>
              ))}
            </div>
            <a
              href={BoldnessTraitsSection.appDownload.btn.link}
              className="solid-button max-sm:place-self-center w-fit cursor-pointer"
            >
              {BoldnessTraitsSection.appDownload.btn.title}
            </a>
          </div>

          <div className="flex flex-col justify-start h-fit">
            <span className="border border-dark-green/80 text-dark-green/80 text-xs px-3 py-1 rounded-full max-w-fit mb-4">
              {BoldnessTraitsSection.traits.title}
            </span>
            <div className="grid grid-cols-2 place-items-start p-2 gap-6">
              {BoldnessTraitsSection.traits.bt.map((item, key) => (
                <div key={key} className="flex-center gap-3">
                  <span className="text-sm p-2 bg-dark-green rounded-full text-secondary/80">
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
              ))}

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
