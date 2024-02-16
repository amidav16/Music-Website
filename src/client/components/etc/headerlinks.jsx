import React from "react";
import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <>
      <MenuItem component={NavLink} to="/home">
        <span className="font-link">Home</span>
      </MenuItem>
      <MenuItem component={NavLink} to="/register">
        <span className="font-link">Register</span>
      </MenuItem>
      <MenuItem component={NavLink}>
        <span className="font-link">About Us</span>
      </MenuItem>
    </>
  );
};

export default HeaderLinks;
