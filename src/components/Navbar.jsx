import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start pointer-events-none">
      {/* logo container */}
      <div className="pointer-events-auto fixed  text-white">
        <img
          src={logo}
          alt="Luxury Logo"
          className="w-16 h-16 md:w-24 md:h-24 object-contain invert-25 mix-blend-color text-white "
          /* TODO: Replace with high-res logo from Figma assets */
        />
      </div>

      {/* branding container */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 pointer-events-auto">
        <h1 className="font-display text-2xl md:text-3xl font-normal tracking-[0.2em] uppercase text-white drop-shadow-sm">
          ROCCIA
        </h1>
      </div>

      {/* spacer for right alignment if needed later */}
      <div className="w-24" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
