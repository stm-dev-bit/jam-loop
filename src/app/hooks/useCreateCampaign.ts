import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Campaign, CreateCampaign } from "../@types/campaignTypes";
import { createCampaign } from "../api/campaign";

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
