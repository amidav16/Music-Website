import React from "react";
import HomeImg from "../../../assets/homeimg.png";

import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Banner = () => {
  //A banner utilizing MUI boxes and buttons to center a picture with text
  return (
    <Box>
      <img
        src={HomeImg}
        alt="HomeBanner"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          objectFit: "cover",
          minHeight: "400px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          marginTop: 15,
          top: "20%",
          textAlign: "center",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "calc(1.5vw + 18px)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <span style={{ color: "var(--lk-yellow)" }}>A</span> Unique Sound Concept
        <span style={{ color: "var(--lk-yellow)" }}> Visualised</span>
        <div style={{ marginTop: 20 }}>
          <Button
            component={NavLink}
            to="/register"
            variant="contained"
            sx={{
              backgroundColor: "var(--lk-yellow)",
              fontWeight: "bold",
              color: "black",
              textShadow: "none",
              width: "135px",
              "&:hover": {
                backgroundColor: "var(--lk-byellow)",
              },
              display: "block",
              margin: "0 auto",
            }}
          >
            <span>Get Started</span>
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Banner;
