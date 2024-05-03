import React from "react";
import Herosection from "../../components/Home/Herosection";
import OurPortofolio from "../../components/Home/OurPortofolio";
import Team from "../../components/Home/Team";
import "../../assets/style/Home.css";
import CreativeService from "../../components/global/CreativeService";
import AboutTestimonial from "../../components/about/AboutTestimonial";
import AboutBrand from "../../components/about/AboutBrand";
import AboutFunFactCounter from "../../components/about/AboutFunFactCounter";

const Home = () => {
  return (
    <>
      <Herosection />
      <CreativeService />
      <OurPortofolio />
      <AboutFunFactCounter />
      <Team />
      <AboutTestimonial />
      <OurPortofolio />
      <AboutBrand />
    </>
  );
};

export default Home;
