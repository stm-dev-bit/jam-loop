"use client";

import React from "react";
import PrivateRoute from "../components/PrivateRoute";

const CampaignsPage: React.FC = () => {
  return (
    <PrivateRoute>
      <div className="flex items-center justify-center min-h-screen">
        <h1>Campaigns</h1>
      </div>
    </PrivateRoute>
  );
};

export default CampaignsPage;
