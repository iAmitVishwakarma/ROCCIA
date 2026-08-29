import React from "react";

const CTA = () => {
  return (
    <section className="py-32 bg-luxury-cream "> 
    <div className="  px-8">
       <span className="font-sans text-base capitalize  text-luxury-black tracking-tight mb-4 opacity">
        Lorem Ipsum dolor sit? <br />
Lorem Ipsum dolor sit amet?
      </span>
    </div>
    <section className="py-32 flex flex-col items-center text-center px-8">
     

      <div className=" w-[110%] px-10 flex flex-col md:flex-row items-center justify-between gap-4 font-display text-[100px] md:text-[200px] text-luxury-accent-gold leading-none font-light lowercase animate-pulse">
          Marbles
        
        <span className="hidden md:block h-[10px] bg-luxury-accent-gold w-[15vw] mx-4" />
       
          Book Your
        
      </div>

      <a
        href="#contact"
        className="mt-16 font-sans text-xl md:text-2xl uppercase tracking-tight text-luxury-accent-gold  border border-luxury-accent-gold px-8 py-4 hover:tracking-widest transition-all duration-500"
      >
        Own Design  →
      </a>
    </section>
    
    
    <div className="  px-8">
      <p className="font-sans text-xl capitalize  text-luxury-black tracking-tight mb-4 opacity">
     Lorem ipsum dolor sit amet consectetur. <br />
Faucibus eu ut quam scelerisque sit vitae <br />
cras libero faucibus. <br />
<br />
If you would like to join us with our <br />
product line - contact us.
      </p>
    </div>
    </section>
  );
};

export default CTA;
