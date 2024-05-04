import React from "react";
import GoogleMap from "../../components/blocks/GoogleMap";
import Columns from "../../components/blocks/Columns";
import PricingTable from "../../components/blocks/PricingTable";
import VideoPopup from '../../components/blocks/VideoPopup';
import Progressbar from '../../components/blocks/Progressbar';
import PortfolioBlock from '../../components/blocks/PortfolioBlock';
import TeamBlock from '../../components/blocks/TeamBlock';
import BlocksContactForm from '../../components/blocks/BlocksContactForm';
import BlocksService from '../../components/blocks/BlocksService';
import BlocksCounter from '../../components/blocks/BlocksCounter';
import BlocksClientLogo from '../../components/blocks/BlocksClientLogo';
import BlogList from '../../components/blocks/BlogList';
import "../../assets/style/Home.css"

const Blocks = () => {
  return (
    <>
      <VideoPopup />
      <Progressbar />
      <PortfolioBlock />
      <TeamBlock />
      <GoogleMap />
      <Columns />
      <PricingTable />
      <BlocksContactForm />
      <BlocksService />
      <BlocksCounter />
      <BlocksClientLogo />
      <BlogList />
    </>
  );
};

export default Blocks;
