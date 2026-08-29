import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { OurValur } from "../components/OurValur";

const Home = () => {
  return (
    <div className="bg-white overflow-x-clip">
      <Hero />
      <About />
      <Gallery />
      <OurValur />
      <Experience />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
