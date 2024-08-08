"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Box } from "@mui/material";
import CustomInput from "./CustomInput";
import { useCreateCampaign, useUpdateCampaign } from "../hooks/useCampaigns";

interface IFormInput {
  name: string;
  budget: number;
  startDate: string;
  endDate: string;
  demographic: string;
  geo: string;
  inventory: string;
  devices: string;
}

interface CreateCampaignFormProps {
  defaultValues?: IFormInput;
  onClose: () => void;
}

const CreateCampaignForm: React.FC<CreateCampaignFormProps> = ({
  defaultValues,
  onClose,
}) => {
  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues,
  });
  const { mutate: createCampaign } = useCreateCampaign();
  const { mutate: updateCampaign } = useUpdateCampaign();

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const campaign = {
      ...data,
      inventory: data.inventory.split(","),
      devices: data.devices.split(","),
    };

    if (defaultValues) {
      updateCampaign(
        { id: (defaultValues as any)._id, updatedCampaign: campaign },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createCampaign(campaign, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="my-2 space-y-6"
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput label="Campaign Name" required {...field} />
        )}
      />
      <Controller
        name="budget"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <CustomInput
            type="number"
            label="Budget Goal (USD)"
            required
            {...field}
          />
        )}
      />
      <div className="flex space-x-2">
        <Controller
          name="startDate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              isFullWidth={false}
              type="date"
              label="Start Date"
              required
              {...field}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              isFullWidth={false}
              type="date"
              label="End Date"
              required
              {...field}
            />
          )}
        />
      </div>
      <Controller
        name="demographic"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput label="Target Demographic" required {...field} />
        )}
      />
      <Controller
        name="geo"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput label="Target Geo" required {...field} />
        )}
      />
      <Controller
        name="inventory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput
            label="Inventory (comma separated)"
            required
            {...field}
          />
        )}
      />
      <Controller
        name="devices"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput label="Devices (comma separated)" required {...field} />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="mt-3 mb-2 w-full"
      >
        {defaultValues ? "Update Campaign" : "Create Campaign"}
      </Button>
    </Box>
  );
};

export default CreateCampaignForm;
