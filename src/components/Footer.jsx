import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5F0000] text-white py-24 px-8">
      <div className="w-95/100 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4 scale-120 pl-15 pt-10 text-luxury-accent-gold">
            <h2 className="font-display text-6xl  tracking-tight ">
             Exquisite Italian <br />
marble makers

            </h2>
            <p className="max-w-xs text-sm font-sans leading-relaxed opacity-70">
            Copyright Roccia, Inc 2025 Privacy Policy
            </p>
          </div>
<div className="md:col-span-3 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-4 gap-16 space-y-3">



          {/* Quick Links */}
          <div className="md:col-span-1  space-y-6 border-l-2 border-luxury-accent-gold/50 pl-8">
            <h4 className="font-sans text-xl uppercase tracking-tight text-luxury-accent-gold font-bold ">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-widest uppercase opacity-70">
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Collections
              </li>
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Gallery
              </li>
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Journey
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 border-l-2 border-luxury-accent-gold/50 pl-8">
            <h4 className="font-sans text-xl uppercase tracking-tight text-luxury-accent-gold font-bold ">
              Contact
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-widest uppercase opacity-70">
              <li>Inquiry@roccia.it</li>
              <li>+39 0123 456 789</li>
              <li>Massa, Tuscany, Italy</li>
            </ul>
          </div>

     {/* Newsletter */}
          <div className="space-y-6 border-l-2 border-luxury-accent-gold/50 pl-8">  
            <h4 className="font-sans text-xl uppercase tracking-tight text-luxury-accent-gold font-bold ">
              Newsletter
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-widest uppercase opacity-70">
              <li>Inquiry@roccia.it</li>
              <li>+39 0123 456 789</li>
              <li>Massa, Tuscany, Italy</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="space-y-6 border-l-2 border-luxury-accent-gold/50 pl-8">
            <h4 className="font-sans text-xl uppercase tracking-tight text-luxury-accent-gold font-bold ">
              connect
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-widest uppercase opacity-70">
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-[#F2F1EA] transition-colors cursor-pointer">
                Twitter
              </li>
            </ul>
          </div>
</section>


<div className=" span-1 w-96/100   border-b-2 pb-2 border-luxury-accent-gold/50">
  <h4 className="font-sans text-xl   uppercase tracking-tight font-bold text-luxury-accent-gold">
NewsLetter
            </h4>
{/* email -> input */}
<input type="email" className="w-9/10 h-10 uppercase" placeholder="Enter your email" />
{/* button */}
<button className=" w-1/10 text-end pr-2 text-2xl pt-2"> →</button>
</div>
</div>


        </div>

        {/* Footer Bottom */}
        <div className="pt-2 text-luxury-accent-gold">
          <div className="font-display text-7xl    text-center">
            ROCCIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
