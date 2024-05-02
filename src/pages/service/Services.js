import React from "react";
import ServiceFirstPage from "../../components/service/ServiceFirstPage";
import CreativeService from "../../components/global/CreativeService";
import CreativeServiceTitle from "../../components/global/CreativeServiceTitle";
import { Box } from "@mui/material";

const Services = () => {
  return (
    <>
      <ServiceFirstPage />
      
      <Box sx={{ backgroundColor: "#F8F9FC" }}>
        <CreativeServiceTitle title={"Digital Marketing"} />
        <CreativeService />
      </Box>

      <CreativeServiceTitle title={"Strategy"} />
      <CreativeService />

      <Box sx={{ backgroundColor: "#F8F9FC" }}>
        <CreativeServiceTitle title={"Creative Agency"} />
      <CreativeService />
      </Box>

      <CreativeServiceTitle title={"Development"} />
      <CreativeService />
    </>
  );
};

export default Services;
