import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Personality from "../sections/Personality";
import Bold from "../sections/Bold";
import Testimonials from "../sections/Testimonials";
import Cta from "../sections/Cta";
import Footer from "../components/Footer";

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
      <Testimonials></Testimonials>
      {/* Cta */}
      <Cta></Cta>
      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default Home;
