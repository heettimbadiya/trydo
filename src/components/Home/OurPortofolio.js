import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import portfolio1 from "../../assets/images/Home/portfolio-1.jpg";
import portfolio2 from "../../assets/images/Home/portfolio-2.jpg";
import portfolio3 from "../../assets/images/Home/portfolio-3.jpg";
import portfolio4 from "../../assets/images/Home/portfolio-4.jpg";
import Heading from "../global/Heading";
import PortfolioSlider from "../global/PortfolioSlider";
const OurPortofolio = () => {
  const theme = useTheme();

  const ourPortfolio = [
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio2,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio3,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio4,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio2,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio3,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio4,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio2,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio3,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio4,
    },
  ];
  return (
    <Box sx={{ backgroundColor: theme.palette.LightBlueBackground }}>
      <Container maxWidth="xl">
        <Box sx={{ pt: "120px" }}>
          <Heading
            heading={"Our Portfolio"}
            description={`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.`}
          />
          <Box sx={{ my: "50px" }}>
            <PortfolioSlider data={ourPortfolio} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default OurPortofolio;
