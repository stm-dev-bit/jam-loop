import { Campaign } from "../../@types/campaignTypes";
import axiosClient from "../axiosClient";

const BASE_PATH = "/campaigns";

/**
 * Fetches campaigns for the currently logged-in user.
 *
 * @returns {Promise<Campaign[]>} A promise that resolves to an array of campaigns
 * filtered by the current user's username.
 */
export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const username = localStorage.getItem("username");
  const response = await axiosClient.get<Campaign[]>(BASE_PATH);
  return response.data.filter((campaign) => campaign.username === username);
};
