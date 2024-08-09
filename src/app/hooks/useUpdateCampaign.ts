import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCampaign } from "../@types/campaignTypes";
import { updateCampaign } from "../api/campaign";

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
