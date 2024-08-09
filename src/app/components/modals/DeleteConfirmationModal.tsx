"use client";

import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface DeleteConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  open,
  handleClose,
  handleConfirm,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-8 shadow-lg">
        <Typography variant="h6" component="h2" className="mb-4">
          Confirm Deletion
        </Typography>
        <Typography className="mb-4">
          Are you sure you want to delete this campaign?
        </Typography>
        <div className="flex justify-end space-x-2">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={handleConfirm}>
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;
