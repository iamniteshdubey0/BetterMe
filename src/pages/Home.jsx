import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Personality from "../sections/Personality";
import Bold from "../sections/Bold";

const Home = () => {
  return (
    <main>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero */}
      <Hero></Hero>
      {/* About us */}
      <AboutUs></AboutUs>
      {/* Features */}
      <Personality></Personality>
      <Bold></Bold>
      {/* testimonials */}
      {/* Cta */}
      {/* Footer */}
    </main>
  );
};

export default Home;
