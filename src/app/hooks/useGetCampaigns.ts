import { useQuery } from "@tanstack/react-query";
import { Campaign } from "../@types/campaignTypes";
import { fetchCampaigns } from "../api/campaign";

/**
 * Custom hook to fetch campaigns using react-query.
 */
export const useCampaigns = () => {
  return useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
  });
};
