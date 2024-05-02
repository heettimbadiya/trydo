import { Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/material";
import React from 'react'

const CreativeServiceTitle = ({title}) => {
    const theme = useTheme()
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", pt: "60px" }}>
          <Typography variant="h3" sx={{ fontWeight: "700" }}>
            {title}
          </Typography>
          <Typography
            color={theme.palette.darkGray}
            sx={{ mt: "15px", fontSize: "18px" }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority <br /> have suffered alteration.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default CreativeServiceTitle;