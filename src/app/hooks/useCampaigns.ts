import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} from "../api/campaigns";
import {
  Campaign,
  CreateCampaign,
  UpdateCampaign,
} from "../@types/campaignTypes";

/**
 * Custom hook to fetch campaigns using react-query.
 */
export const useCampaigns = () => {
  return useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
  });
};

/**
 * Custom hook to create a new campaign using react-query.
 */
export const useCreateCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation<Campaign, Error, CreateCampaign>({
    mutationFn: createCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] });
    },
  });
};

/**
 * Custom hook to update an existing campaign using react-query.
 */
export const useUpdateCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    { id: string; updatedCampaign: UpdateCampaign }
  >({
    mutationFn: ({ id, updatedCampaign }) =>
      updateCampaign(id, updatedCampaign),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] });
    },
  });
};

/**
 * Custom hook to delete a campaign using react-query.
 */
export const useDeleteCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: deleteCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] });
    },
  });
};
