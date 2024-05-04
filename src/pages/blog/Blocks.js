import React from "react";
import VideoPopup from "../../components/blocks/VideoPopup";
import Progressbar from "../../components/blocks/Progressbar";
import GoogleMap from "../../components/blocks/GoogleMap";
import Columns from "../../components/blocks/Columns";
import PricingTable from "../../components/blocks/PricingTable";

const Blocks = () => {
  return (
    <>
      <VideoPopup />
      <Progressbar />
      <GoogleMap />
      <Columns />
      <PricingTable />
    </>
  );
};

export default Blocks;
