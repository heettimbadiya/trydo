import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/about/brand/brand-01.png";
import img2 from "../../assets/images/about/brand/brand-02.png";
import img3 from "../../assets/images/about/brand/brand-03.png";
import img4 from "../../assets/images/about/brand/brand-04.png";
import img5 from "../../assets/images/about/brand/brand-05.png";
import img6 from "../../assets/images/about/brand/brand-06.png";
function BrandImg() {
  const people = [
    {
      imageSrc: img1,
    },
    {
      imageSrc: img2,
    },
    {
      imageSrc: img3,
    },
    {
      imageSrc: img4,
    },
    {
      imageSrc: img5,
    },
    {
      imageSrc: img6,
    },
    {
      imageSrc: img5,
    },
    {
      imageSrc: img6,
    },
  ];
  return (
    <>
      <Box
        sx={{ padding: { lg: "60px 0px 120px 0px", xs: "40px 0px 40px 0px" } }}
      >
        <Box>
          <Container maxWidth="xl">
            {/* <Grid container justifyContent={"center"}> */}
            {/* <Grid item xs={12}> */}
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 0, xl: 0 }}
                justifyContent={"center"}
              >
                {people.map((value, ind) => (
                  <Grid
                    item
                    md={3}
                    sm={4}
                    xs={6}
                    sx={{
                      height: { md: "94px", sm: "94px", xs: "94px" },
                      margin: "35px 0px",
                    }}
                  >
                    <Typography
                      key={ind}
                      variant="li"
                      sx={{
                        cursor: "pointer",
                        "&:hover img": {
                          opacity: "1 !important",
                          transition: "0.9s",
                          scale: "1.1",
                        },
                      }}
                    >
                      <img
                        src={value.imageSrc}
                        alt={value.name}
                        style={{
                          opacity: "0.5",
                          borderRadius: "5px",
                          objectFit: "contain",
                        }}
                      />
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* </Grid> */}
            {/* </Grid> */}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default BrandImg;
