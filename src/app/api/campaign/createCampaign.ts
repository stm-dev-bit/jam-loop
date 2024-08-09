import { Campaign, CreateCampaign } from "../../@types/campaignTypes";
import axiosClient from "../axiosClient";

/**
 * Creates a new campaign for the current user.
 *
 * @param {CreateCampaign} campaign - The campaign data to be created.
 * @returns {Promise<Campaign>} A promise that resolves to the created campaign data.
 */

export const createCampaign = async (
  campaign: CreateCampaign
): Promise<Campaign> => {
  const BASE_PATH = "/campaigns";
  const username = localStorage.getItem("username");
  const response = await axiosClient.post<Campaign>(BASE_PATH, {
    ...campaign,
    username,
  });
  return response.data;
};
