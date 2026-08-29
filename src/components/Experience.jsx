import React from "react";
import logo from "../assets/logo.png";

import Image2 from "../assets/Expercience-sec/Rectangle 29.png";
import Image3 from "../assets/Expercience-sec/Rectangle 30.png";
import Image4 from "../assets/Expercience-sec/Rectangle 31.png";
import Image5 from "../assets/Expercience-sec/Rectangle 34.png";
import Image6 from "../assets/Expercience-sec/Rectangle 35.png";
import Image7 from "../assets/Expercience-sec/Rectangle 36.png";

// Left column images
const leftColImages = [
  { src: Image5, alt: "Elegant vase with pampas grass" },
  { src: Image6, alt: "Modern freestanding bathtub" },
  { src: Image2, alt: "Luxury bathroom vanity with flowers" },
  { src: Image4, alt: "Classic living room with fireplace" },
];

// Right column images
const rightColImages = [
  { src: Image3, alt: "Marble bathroom with glass shower" },
  { src: Image2, alt: "Stone vanity with yellow flowers" },
  { src: Image7, alt: "Modern white marble bathroom" },
  { src: Image6, alt: "Bathtub with garden view" },
];

const Experience = () => {
  return (
    <section className="relative flex flex-col px-20 md:flex-row justify-between bg-luxury-cream overflow-visible">
      {/* Left Sticky Sidebar */}
      <div className="w-full md:w-[28%] md:min-w-[280px] shrink-0">
        <div className="relative md:sticky top-0 h-auto md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-10 lg:px-14 py-10 md:py-0">
          <h2 className="font-display text-[64px] md:text-[6vw] lg:text-[160px] text-luxury-accent-gold leading-none font-normal tracking-tighter">
            10<sup className="text-2xl md:text-4xl text-luxury-accent-gold">+</sup>
          </h2>
          <p className="font-sans text-[14px] md:text-[1.1vw] lg:text-[20px] text-luxury-black mt-2 leading-tight tracking-tighter max-w-[240px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      {/* Center Scrolling Image Gallery */}
      <div className="flex-1  px-4 md:px-6">
        <div className="flex w-8/10 mx-auto gap-4 md:gap-6 py-10 md:py-16 pb-20">
          {/* Left image column */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-0">
            {leftColImages.map((img, index) => (
              <div
                className="group rounded overflow-hidden bg-[#ebe8e1]"
                key={`left-1-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
            {leftColImages.map((img, index) => (
              <div
                className="group rounded overflow-hidden bg-[#ebe8e1]"
                key={`left-2-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Right image column (staggered offset) */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-[30px] md:pt-[60px]">
            {rightColImages.map((img, index) => (
              <div
                className="group rounded overflow-hidden bg-[#ebe8e1]"
                key={`right-1-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
            {rightColImages.map((img, index) => (
              <div
                className="group rounded overflow-hidden bg-[#ebe8e1]"
                key={`right-2-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sticky Sidebar */}
      <div className="w-full md:w-[120px] lg:w-[150px] shrink-0 order-first md:order-last">
        <div className="relative md:sticky top-0 h-auto md:h-screen flex flex-row md:flex-col items-center justify-center gap-6 md:gap-12 p-6">
          {/* ROCCIA vertical text */}
          <span className="font-display text-4xl md:text-7xl lg:text-8xl font-normal tracking-[6px] lg:tracking-[8px] text-luxury-accent-gold [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]">
            ROCCIA
          </span>

          {/* Arch/Window Logo icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <img
              className="w-full h-full object-contain scale-125 drop-shadow-md drop-shadow-amber-950 hue-rotate-10"
              src={logo}
              alt="Roccia Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
