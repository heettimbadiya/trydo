import React, { useState } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function AboutFunFact() {
  const [counterState, setCounterstate] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{ padding: { lg: "0px 0px 120px 0px", xs: "0px 0px 60px 0px" } }}
        >
          <ScrollTrigger onEnter={() => setCounterstate(true)}>
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid item sm={8} display={"flex"} justifyContent={"center"}>
                <Box>
                  <Box textAlign={"center"}>
                    <Typography variant="h3">Our Fun Facts</Typography>
                  </Box>
                  <Grid
                    container
                    sx={{ margin: { md: "40px 15px", sm: "0px 0px" } }}
                    display={"flex"}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                      <Grid
                        sx={{
                          fontSize: "72px",
                          fontWeight: "600",
                          color: theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp start={0} end={80} duration={1}></CountUp>
                          )}
                          <Typography
                            sx={{
                              fontSize: "50px",
                              fontWeight: "500",
                            }}
                          >
                            +
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Grid
                        sx={{
                          fontSize: "72px",
                          fontWeight: "600",
                          color: theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp start={0} end={575} duration={1}></CountUp>
                          )}
                          <Typography
                            sx={{
                              fontSize: "50px",
                              fontWeight: "500",
                            }}
                          >
                            +
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Grid
                        sx={{
                          fontSize: "72px",
                          fontWeight: "600",
                          color: theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp start={0} end={69} duration={1}></CountUp>
                          )}
                          <Typography
                            sx={{
                              fontSize: "50px",
                              fontWeight: "500",
                            }}
                          >
                            +
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </>
  );
}

export default AboutFunFact;
