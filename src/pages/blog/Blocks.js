import React from "react";
import VideoPopup from "../../components/blocks/VideoPopup";
import Progressbar from "../../components/blocks/Progressbar";
import GoogleMap from "../../components/blocks/GoogleMap";
import Columns from "../../components/blocks/Columns";
import PricingTable from "../../components/blocks/PricingTable";
import React from 'react'
import VideoPopup from '../../components/blocks/VideoPopup';
import Progressbar from '../../components/blocks/Progressbar';
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
      <GoogleMap />
      <Columns />
      <PricingTable />
      <VideoPopup />
      <Progressbar />
      <BlocksContactForm />
      <BlocksService />
      <BlocksCounter />
      <BlocksClientLogo />
      <BlogList />
    </>
  );
};

export default Blocks;
