import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCampaign } from "../api/campaign";
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
