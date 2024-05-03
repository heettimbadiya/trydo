import { Box } from "@mui/material";
import React from "react";

const ContactMap = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "650px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7438.8307052222835!2d72.88833690000001!3d21.215372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1714535670686!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", height: "100%" }}
          loading="lazy"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactMap;
