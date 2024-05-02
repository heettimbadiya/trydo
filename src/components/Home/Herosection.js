import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import backImg from "../../assets/images/Home/back.jpg";
import Header from "../global/Header";

const Herosection = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: { sm: "100vh", xs: "75vh" },

          color: theme.palette.common.white,
          backgroundImage: `url(${backImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height:"60%",
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ textAlign: "center", px: { md: "100px" } }}>
              <Box
                className="theme-gradient"
                sx={{
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  fontSize: { md: "100px", sm: "80px", xs: "50px" },
                  fontWeight: 900,
                  mb: "10px",
                }}
              >
                CREATIVE
              </Box>
              <Box
                sx={{
                  color: theme.palette.textGray,
                  fontSize: { md: "24px", sm: "20px", xs: "17px" },
                }}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration.
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Herosection;
