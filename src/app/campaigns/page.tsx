"use client";

import React, { useState } from "react";
import PrivateRoute from "../components/PrivateRoute";
import CreateCampaignModal from "../components/CreateCampaignModal";
import CampaignsTable from "../components/CampaignsTable";
import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";

const CampaignsPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PrivateRoute>
      <Navbar handleOpen={handleOpen} />
      <Container className="mt-32">
        <CreateCampaignModal open={open} handleClose={handleClose} />
        <CampaignsTable />
      </Container>
    </PrivateRoute>
  );
};

export default CampaignsPage;
