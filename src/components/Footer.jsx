// Footer.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ marginTop: '20px', marginBottom: '20px', boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}>
      <Toolbar sx={{ justifyContent: "center", "& > *:not(:last-child)": { marginRight: '10px' } }}>
        <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ fontSize: '2rem' }}></i>
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ fontSize: '2rem' }}></i>
        </IconButton>
        <IconButton href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope" style={{ fontSize: '2rem' }}></i>
        </IconButton>
      </Toolbar>
      <Typography variant="h6" component="div" align="center" color="inherit" sx={{ flexGrow: 1 }}>
      Productivity brought to you by Alan, Anastasia, and Oleh
        </Typography>
      <div style={{ marginBottom: '20px' }}></div>
    </AppBar>
  );
};

export default Footer;

