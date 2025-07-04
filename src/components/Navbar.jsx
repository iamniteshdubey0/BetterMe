import { MenuIcon, PersonStanding } from "lucide-react";
import React from "react";
import { NavbarSection } from "../constants/constant";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex-between space-x-3 px-4 py-6 max-w-6xl">
        <div className="flex-center gap-2">
          <span>
            <PersonStanding></PersonStanding>
          </span>
          <h3 className="text-xl font-semibold text-accent">
            {NavbarSection.brand}
          </h3>
        </div>
        <div className="hidden md:flex-center gap-3">
          {NavbarSection.navLinks?.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-semibold text-foreground/70 hover:text-foreground hover:scale-102 p-2 hover:border-b-2 hover:border-accent transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex-center gap-3">
          <button className="solid-button">{NavbarSection.cta}</button>

          <div className="flex md:hidden gap-3">
            <MenuIcon></MenuIcon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
