"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Box } from "@mui/material";
import CustomInput from "../CustomInput";
import { useCreateCampaign, useUpdateCampaign } from "../../hooks";
import { Campaign, CreateCampaign } from "../../@types/campaignTypes";

interface CreateCampaignFormProps {
  defaultValues?: Campaign;
  onClose: () => void;
}

const CreateCampaignForm: React.FC<CreateCampaignFormProps> = ({
  defaultValues,
  onClose,
}) => {
  const { control, handleSubmit, reset } = useForm<CreateCampaign>({
    defaultValues,
  });
  const { mutate: createCampaign } = useCreateCampaign();
  const { mutate: updateCampaign } = useUpdateCampaign();

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit: SubmitHandler<CreateCampaign> = (variables) => {
    const { _id, ...rest } = variables as any;

    const campaign = {
      ...rest,
      inventory: Array.isArray(rest.inventory)
        ? rest.inventory
        : rest.inventory.split(","),
      devices: Array.isArray(rest.devices)
        ? rest.devices
        : rest.devices.split(","),
    };

    if (_id) {
      updateCampaign(
        { id: _id, updatedCampaign: campaign },
        {
          onSuccess: () => {
            onClose();
          },
          onError: (error) => {
            console.error("Update campaign failed:", error);
          },
        }
      );
    } else {
      createCampaign(campaign, {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          console.error("Create campaign failed:", error);
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
        render={({ field }) => (
          <CustomInput label="Campaign Name" required {...field} />
        )}
      />
      <Controller
        name="budget"
        control={control}
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
          render={({ field }) => (
            <CustomInput
              isfullwidth={false}
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
          render={({ field }) => (
            <CustomInput
              isfullwidth={false}
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
        render={({ field }) => (
          <CustomInput label="Target Demographic" required {...field} />
        )}
      />
      <Controller
        name="geo"
        control={control}
        render={({ field }) => (
          <CustomInput label="Target Geo" required {...field} />
        )}
      />
      <Controller
        name="inventory"
        control={control}
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
