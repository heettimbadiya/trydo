import React from "react";
import HeroSection from "../../components/global/HeroSection";
import "../../assets/style/About.css";
import AboutDetails from "../../components/about/AboutDetails";
import AboutFunFact from "../../components/about/AboutFunFact";
import AboutFindWork from "../../components/about/AboutFindWork";
import background from "../../assets/image/global/Herosection/heroImage.jpg";
import AboutTestimonial from "../../components/about/AboutTestimonial";
import AboutBrand from "../../components/about/AboutBrand";

function About() {
  return (
    <>
      <HeroSection Titale={"About"} url={background} />
      <AboutDetails />
      <AboutFunFact />
      <AboutFindWork />
      <AboutTestimonial />
      <AboutBrand />
    </>
  );
}

export default About;
