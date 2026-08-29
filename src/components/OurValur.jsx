import React from 'react'

import interiorImageValue from "../assets/Rectangle 31.png";
export const OurValur = () => {
  return (
    <>
       {/* 1. Gold Vanity Feature Section */}
      <section className="relative py-20 bg-[#d6ccb1]">
        <div className=" w-[95%] flex justify-around mx-auto gap-10  ">
          <div className="w-2/4">
            <span className="bg-white/50 rounded-full text-2xl text-luxury-black capitalize font-display px-7 py-2">our value</span>
            <p className="font-sans text-xl  md:text-4xl leading-[121%] font-semibold mt-5 text-luxury-black  ">
              Lorem ipsum dolor sit amet contetur. <br />
              Et mauris proin blandit neque in.
            </p>
          </div>
          <div className="w-2/4">
            <p className="font-display text-xl md:text-2xl mt-7 tracking-[5%] leading-[121%]  text-luxury-black ">
              Lorem ipsum dolor sit amet contetur. Et mauris proin blandit
              semper tincidunt neque in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illum non earum. Est accusantium tempora autem cumque harum voluptatum, quam, quod, corporis quibusdam libero iure esse nostrum fugit? Dicta fuga repellat pariatur facilis possimus commodi libero dignissimos corrupti facere nesciunt.
            </p>
          </div>
        
        </div>  
        <div className="md:w-[95%] aspect-20/8  mx-auto w-full overflow-hidden relative mt-24 mb-10 rounded-xl ">
            <img
              src={interiorImageValue}
              className="w-full h-full object-cover  grayscale hover:grayscale-0 transition-all duration-700"
              alt="Gold Vanity Feature"
            />
          </div>
      </section>
      </>
  )
}
