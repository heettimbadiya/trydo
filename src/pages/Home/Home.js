import React from 'react'
import Herosection from '../../components/Home/Herosection'
import CreativeService from '../../components/Home/CreativeService'
import OurPortofolio from '../../components/Home/OurPortofolio';
import Team from '../../components/Home/Team';
import "../../assets/style/Home.css";

const Home = () => {
  return (
      <>
      <Herosection />
      <CreativeService />
      <OurPortofolio />
      <Team />
    </>
  )
}

export default Home