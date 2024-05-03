import React, { useState } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function FunFactCouter({
  heading,
  counterDeatils1,
  counterDeatils2,
  counterDeatils3,
  counter1,
  counter2,
  counter3,
}) {
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
              <Grid item display={"flex"} justifyContent={"center"}>
                <Box>
                  <Box textAlign={"center"}>
                    <Typography variant="h3">{heading}</Typography>
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
                            <CountUp
                              start={0}
                              end={counter1}
                              duration={1}
                            ></CountUp>
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
                          {counterDeatils1}
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
                            <CountUp
                              start={0}
                              end={counter2}
                              duration={1}
                            ></CountUp>
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
                          {counterDeatils2}
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
                            <CountUp
                              start={0}
                              end={counter3}
                              duration={1}
                            ></CountUp>
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
                          {counterDeatils3}
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

export default FunFactCouter;
