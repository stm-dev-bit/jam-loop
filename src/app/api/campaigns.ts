import {
  Campaign,
  CreateCampaign,
  UpdateCampaign,
} from "../@types/campaignTypes";
import axiosClient from "./axiosClient";

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

/**
 * Creates a new campaign for the current user.
 *
 * @param {CreateCampaign} campaign - The campaign data to be created.
 * @returns {Promise<Campaign>} A promise that resolves to the created campaign data.
 */
export const createCampaign = async (
  campaign: CreateCampaign
): Promise<Campaign> => {
  const username = localStorage.getItem("username");
  const response = await axiosClient.post<Campaign>(BASE_PATH, {
    ...campaign,
    username,
  });
  return response.data;
};

/**
 * Updates an existing campaign by its ID.
 *
 * @param {string} id - The ID of the campaign to be updated.
 * @param {UpdateCampaign} updatedCampaign - The updated campaign data.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export const updateCampaign = async (
  id: string,
  updatedCampaign: UpdateCampaign
): Promise<void> => {
  await axiosClient.put(`${BASE_PATH}/${id}`, updatedCampaign);
};

/**
 * Deletes a campaign by its ID.
 *
 * @param {string} id - The ID of the campaign to be deleted.
 * @returns {Promise<void>} A promise that resolves when the campaign is deleted.
 */
export const deleteCampaign = async (id: string): Promise<void> => {
  await axiosClient.delete(`${BASE_PATH}/${id}`);
};
