"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Box } from "@mui/material";
import CustomInput from "../CustomInput";
import { useCreateCampaign, useUpdateCampaign } from "../../hooks/useCampaigns";

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

  const onSubmit: SubmitHandler<IFormInput> = (variables) => {
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
