"use client";

import React, { useState } from "react";
import { useCampaigns, useDeleteCampaign } from "../hooks/useCampaigns";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import CreateCampaignModal from "./CreateCampaignModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const CampaignsTable: React.FC = () => {
  const { data: campaigns, isLoading, isError } = useCampaigns();
  const { mutate: deleteCampaign } = useDeleteCampaign();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any | null>(null);

  const handleOpenDelete = (campaignId: string) => {
    setSelectedCampaign(campaignId);
    setOpenDeleteModal(true);
  };

  const handleCloseDelete = () => {
    setOpenDeleteModal(false);
    setSelectedCampaign(null);
  };

  const handleConfirmDelete = () => {
    if (selectedCampaign) {
      deleteCampaign(selectedCampaign);
    }
    handleCloseDelete();
  };

  const handleOpenEdit = (campaign: any) => {
    setSelectedCampaign(campaign);
    setOpenEditModal(true);
  };

  const handleCloseEdit = () => {
    setOpenEditModal(false);
    setSelectedCampaign(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading campaigns</div>;
  }

  return (
    <>
      <TableContainer component={Paper} className="w-full mx-auto mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Demographic</TableCell>
              <TableCell>Geo</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Devices</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns?.map((campaign: any) => (
              <TableRow key={campaign._id}>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>{campaign.startDate}</TableCell>
                <TableCell>{campaign.endDate}</TableCell>
                <TableCell>{campaign.demographic}</TableCell>
                <TableCell>{campaign.geo}</TableCell>
                <TableCell>{campaign.inventory.join(", ")}</TableCell>
                <TableCell>{campaign.devices.join(", ")}</TableCell>
                <TableCell className="flex space-x-2">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenEdit(campaign)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenDelete(campaign._id!)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteConfirmationModal
        open={openDeleteModal}
        handleClose={handleCloseDelete}
        handleConfirm={handleConfirmDelete}
      />
      <CreateCampaignModal
        open={openEditModal}
        handleClose={handleCloseEdit}
        defaultValues={selectedCampaign}
      />
    </>
  );
};

export default CampaignsTable;
