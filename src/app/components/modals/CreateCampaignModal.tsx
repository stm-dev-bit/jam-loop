"use client";

import { Modal, Box, Typography, Button } from "@mui/material";
import CreateCampaignForm from "../CreateCampaignForm";

interface CreateCampaignModalProps {
  open: boolean;
  handleClose: () => void;
  defaultValues?: any;
}

const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  open,
  handleClose,
  defaultValues,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-4 shadow-lg">
        <Typography variant="h6" component="h2" className="mb-4">
          {defaultValues ? "Edit Campaign" : "Create New Campaign"}
        </Typography>
        <CreateCampaignForm
          defaultValues={defaultValues}
          onClose={handleClose}
        />
        <Button onClick={handleClose} fullWidth variant="outlined">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateCampaignModal;
