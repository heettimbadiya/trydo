import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import team1 from "../../assets/images/Home/team-01.jpg";
import team2 from "../../assets/images/Home/team-02.jpg";
import team3 from "../../assets/images/Home/team-03.jpg";
import team4 from "../../assets/images/Home/team-06.jpg";
import team5 from "../../assets/images/Home/team-05.jpg";
import team6 from "../../assets/images/Home/team-12.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Team = () => {
  const theme = useTheme();

  const teamData = [
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team5, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team6, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
  ];
  return (
    <Box sx={{ backgroundColor: theme.palette.backgroundGrey }}>
      <Container>
        <Box>
          <Box>
            <Box component={"h2"} sx={{ fontSize: "60px" }}>
              Skilled Team
            </Box>
            <Typography
              sx={{
                color: theme.palette.cardTextGrey,
                fontSize: "19px",
                letterSpacing: "0.9px",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,{" "}
              <br /> but the majority have suffered alteration.
            </Typography>
          </Box>
          <Box sx={{ my: "50px" }}>
            <Grid container spacing={3}>
              {teamData.map((item, ind) => (
                <Grid item xs={4}>
                  <Box
                    className="portfolio"
                    sx={{
                      marginBlock: "0",
                      position: "relative",
                      "&:hover .teamIcons > *": {
                        transform: "scale(1)",
                      },
                      "&:hover .name": {
                        visibility: "visible",
                        opacity: "1",
                        transform: "translateY(0px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${item.backImg})`,
                        height: "520px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <Box
                        className="teamIcons"
                        sx={{
                          zIndex: "2",
                          position: "absolute",
                          color: theme.palette.common.white,
                          padding: "30px",
                          "& > *": {
                            transform: "scale(0)",
                            transition: "0.4s",
                          },
                        }}
                      >
                        <FacebookOutlinedIcon />
                        <LinkedInIcon sx={{ mx: "13px" }} />
                        <TwitterIcon />
                      </Box>
                      <Box
                        className="name"
                        sx={{
                          zIndex: "2",
                          position: "absolute",
                          bottom: "0px",
                          transform: "translateY(20px)",
                          color: theme.palette.common.white,
                          padding: "30px",
                          visibility: "hidden",
                          opacity: "0",
                          transition: "0.4s",
                        }}
                      >
                        <Box component={"h3"} sx={{ fontSize: "20px" }}>
                          {item.name}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: theme.palette.textGray,
                          }}
                        >
                          {item.field}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="thumbnail"
                      sx={{
                        ":after": {
                          backgroundColor: "unset !important",
                        },
                      }}
                    ></Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
