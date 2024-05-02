import React from "react";
import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const HeroSection = ({ Titale, url }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "454px",
          background: `linear-gradient(rgba(8, 8, 8, 0.6), rgba(8, 8, 8, 0.6)), url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h2"
              sx={{ fontSize: "54px", color: theme.palette.darkRed }}
              textAlign="center"
              fontWeight={800}
              mb={2}
            >
              {Titale}
            </Typography>
          </Box>
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                color="inherit"
                underline="none"
                href="/"
                sx={{ color: theme.palette.white }}
              >
                Home
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                sx={{ color: theme.palette.darkRed }}
              >
                {Titale}
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
