import React from "react";
import columnImage from "../assets/about-sec/column.png";

const About = () => {
  return (
    <>
      <section className="  bg-luxury-cream overflow-hidden w-full py-20 ">
        {/* Typography Layer (Behind Image) */}
        <div className=" relative inset-1 flex h-screen flex-col z-20 justify-center items-center pointer-events-none py-30 px-8">
          <img
            src={columnImage}
            alt="Marble Column"
            className="w-1/3 absolute h-11/12 z-0  object-cover bg-white"
          />

          <div className="w-3/4     flex justify-start items-baseline  -mt-50 mb-15 ">
            <h2 className="fontsans text-start text-[12vw] md:text-[6vw]  leading-none text-luxury-black uppercase tracking-tighter mix-blend-difference">
              ABOUT <span className="text-white">US</span>
            </h2>
          </div>

          <div className="w-1/2  flex justify-end  ml-40 pr-5  mb-10 ">
            <h2 className="fontsans text-start text-[12vw] md:text-[6vw]  leading-none text-luxury-black uppercase tracking-tighter mix-blend-difference">
             <span className="text-white">JOUR</span>NEY
            </h2>
          </div>

          {/* Row 3: INDIAN MARBLES - ITALIAN MARBLES */}
          <div className="w-[140%] flex justify-around -mb-10  mt-15">
            <h4 className="fontsans z-10 ml-20 text-start text-[8vw] md:text-[6vw] text-luxury-black leading-none uppercase tracking-tight ">
              INDIAN MARB<span className="text-white">LES</span>
            </h4>
            <h4 className="font-sans z-10 mr-15 text-start text-[8vw] md:text-[6vw] text-luxury-black  leading-none uppercase tracking-tight ">
              <span className="text-white">ITA</span>LIAN MARBLES
            </h4>
          </div>
  <div className="absolute   bottom-2  right-1/7 pr-5  z-30">
         
           <h1 className="font-sans text-base w-xs text-luxury-black leading-relaxed mix-blend-difference">
            Lorem ipsum dolor sit amet consectetur. Sed velit venerutis
            imperdiet enim dolor tellus scelerisque.
          </h1>
        </div>

       
        </div>
      </section>

     
    </>
  );
};

export default About;
