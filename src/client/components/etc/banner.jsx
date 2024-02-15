import React from "react";
import HomeImg from "../../../assets/homeimg.png";
import { NavLink } from "react-router-dom";

import { Box, Button } from "@mui/material";

const Banner = () => {
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
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "calc(1.5vw + 20px)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <span style={{ color: "yellow" }}>A</span> Unique Sound Concept
        <span style={{ color: "yellow" }}> Visualised</span>
        <div style={{ marginTop: 20 }}>
          <Button
            component={NavLink}
            to="/register"
            variant="contained"
            sx={{
              backgroundColor: " #fff176",
              fontWeight: "bold",
              color: "black",
              width: "135px",
              "&:hover": {
                backgroundColor: "#ffeb3b",
              },
              display: "block",
              margin: "0 auto",
            }}
          >
            Get Started
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Banner;
