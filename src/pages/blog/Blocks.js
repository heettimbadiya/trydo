import React from 'react'
import VideoPopup from '../../components/blocks/VideoPopup';
import Progressbar from '../../components/blocks/Progressbar';
import PortfolioBlock from '../../components/blocks/PortfolioBlock';
import TeamBlock from '../../components/blocks/TeamBlock';

const Blocks = () => {
  return (
    <>
      <VideoPopup />
      <Progressbar />
      <PortfolioBlock />
      <TeamBlock />
    </>
  );
}

export default Blocks;
