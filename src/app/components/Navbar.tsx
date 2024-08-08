"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

interface NavbarProps {
  handleOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleOpen }) => {
  const { logout } = useAuth();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="fixed" className="z-10">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">Campaigns</Typography>
        <Box className="flex items-center space-x-4">
          <Typography variant="body1">{username}</Typography>
          <Button color="inherit" onClick={handleOpen}>
            Create Campaign
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
