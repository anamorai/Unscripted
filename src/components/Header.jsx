// Header.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const Header = ({ mode, handleChange }) => {
  return (
    <AppBar position="static" sx={{ marginBottom: '20px', borderRadius: '15px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          Productivity Manager
        </Typography>
        <Switch
          checked={mode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
