import React from "react";
import interiorImage1 from "../assets/about-sec/interior1.png";
import interiorImage2 from "../assets/about-sec/interior2.png"; 
import interiorImage3 from "../assets/about-sec/interior3.png"; 
import interiorImage4 from "../assets/about-sec/interior4.png"; 

const Gallery = () => {


  return (
   <section className="relative py-32 bg-luxury-cream px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1920px] mx-auto w-full">
          {/* Top Text Block */}
          <div className="max-w-4xl mb-16">
            <p className="font-sans text-xl md:text-3xl text-luxury-black font-bold uppercase tracking-tight leading-tight">
Lorem ipsum dolor sit amet contetur. Et mauris proin blandit semper tincidunt neque in. Sed cursus risus nisl egestas bibendum bibendum.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-12 h-auto md:h-[800px] relative">
            {/* 1. Left Vertical Image (Ornate) */}
            <div className="col-span-12 md:col-span-3 h-[300px] top-10 z-20 md:h-full relative overflow-hidden group">
            <img className="w-full" src={interiorImage4} alt="" />
            </div>

            {/* 2. Center Large Image (Lobby) */}
            <div className="col-span-12  -left-10 md:col-span-5 h-[300px] md:h-[90%] md:mt-[10%] relative overflow-hidden group z-10">
              
                <img
                  src={interiorImage1}
                //   className="w-full h-full object-cover object-center  group-hover:-0 transition-all duration-700"
                
                  alt="Modern Lobby"
                />
            </div>

            {/* 3. Right Column (Wall + Overlay) */}
          <div className="col-span-12 md:col-span-3 h-[300px] z-20 md:h-full relative -left-10 overflow-hidden group "> 
            <img className="w-full object-contain" src={interiorImage2} alt="" />
            </div>

   <div className="col-span-12 md:col-span-2 h-[300px] z-20 md:h-full absolute -top-10   -right-8 overflow-hidden group "> 
            <img className="w-full object-contain" src={interiorImage3} alt="" />
            </div>

          </div>

<div className="absolute bottom-1/8   right-1/8 w-md text-start px-5 z-30">
          <p className="font-sans text-md text-luxury-black uppercase leading-tight tracking-tight font-bold mix-blend-difference">
            Lorem ipsum dolor sit amet consectetur. Sed velit venerutis 
            imperdiet enim dolor tellus scelerisque.
          </p>
        </div>

        </div>
      </section>
  );
};

export default Gallery;
