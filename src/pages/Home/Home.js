import React from "react";
import Herosection from "../../components/Home/Herosection";
import OurPortofolio from "../../components/Home/OurPortofolio";
import Team from "../../components/Home/Team";
import "../../assets/style/Home.css";
import CreativeService from "../../components/global/CreativeService";
import AboutFunFact from "../../components/about/AboutFunFact";
import AboutTestimonial from "../../components/about/AboutTestimonial";
import AboutBrand from "../../components/about/AboutBrand";

const Home = () => {
  return (
    <>
      <Herosection />
      <CreativeService />
      <OurPortofolio />
      <AboutFunFact />
      <Team />
      <AboutTestimonial />
      <OurPortofolio />
      <AboutBrand />
    </>
  );
};

export default Home;
