import React from "react";

import bgVideo from "../assets/hero-bg-video.mp4";
import Navbar from "./Navbar";

const Hero = () => {
  const navItems = ["Luxury", "Human", "Elegence", "Global"];

  return (
    <section className=" h-screen w-full  flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <Navbar />

<section className=" h-full w-full flex-col flex  justify-center items-center ">


      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={bgVideo}
          className="w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 mt-12">
        <span className="font-sans text-xs md:text-hero-sub-mobile lg:text-hero-sub uppercase tracking-tighter mb-4 opacity-80 animate-fade-in-down">
          Our Goal
        </span>

        <h1 className="font-display text-[10vw] md:text-hero-main leading-[1.1] md:leading-[100%] font-normal max-w-6xl tracking-tight drop-shadow-2xl animate-fade-in mb-10">
          Experience Luxury
        </h1>

        <nav className="w-full max-w-4xl">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-12 text-sm md:text-hero-sub-mobile lg:text-hero-sub font-sans tracking-normal  opacity-90">
            {navItems.map((item, index) => (
              <React.Fragment key={item}>
                <li className="hover:text-luxury-accent-gold transition-all duration-500  cursor-pointer hover:tracking-[0.3em] font-light">
                  {item}
                </li>
                {index < navItems.length - 1 && (
                  <li className="text-luxury-accent-gold/50 pointer-events-none select-none">
                    *
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
</section>
      {/* Custom Animations Inline */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
