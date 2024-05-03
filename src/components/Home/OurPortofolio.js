import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { EffectFade, Pagination, Scrollbar } from "swiper/modules";
import portfolio1 from "../../assets/images/Home/portfolio-1.jpg";
import portfolio2 from "../../assets/images/Home/portfolio-2.jpg";
import portfolio3 from "../../assets/images/Home/portfolio-3.jpg";
import portfolio4 from "../../assets/images/Home/portfolio-4.jpg";
import Heading from "../global/Heading";
const OurPortofolio = () => {
  const theme = useTheme();
  const styles = {
    slide: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      height: "550px",
      width: "90%",
    },
  };
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
    <Box sx={{ backgroundColor: theme.palette.backgroundGrey }}>
      <Container maxWidth="xl">
        <Box sx={{ pt: "120px" }}>
          <Heading
            heading={"Our Portfolio"}
            description={`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.`}
          />
          <Box sx={{ my: "50px" }}>
            <Box>
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {ourPortfolio.map((item, index) => (
                  <SwiperSlide
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box xs={4} className="portfolio" sx={styles.slide}>
                      <Box className="thumbnail-inner" sx={{ height: "100%" }}>
                        <Box
                          className="thumbnail"
                          sx={{ backgroundImage: `url(${item.backImg})` }}
                        ></Box>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          padding: "30px",
                          bottom: "0",
                          zIndex: "2",
                        }}
                      >
                        <Typography
                          component={"p"}
                          sx={{
                            color: theme.palette.textGray,
                            fontSize: "14px",
                            letterSpacing: "0.9px",
                            mb: "18px",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component={"h2"}
                          sx={{
                            color: theme.palette.common.white,
                            fontSize: "24px",
                            fontWeight: "600",
                          }}
                        >
                          {item.heading}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default OurPortofolio;
