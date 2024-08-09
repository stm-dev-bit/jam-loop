import { UpdateCampaign } from "../../@types/campaignTypes";
import axiosClient from "../axiosClient";

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
  const BASE_PATH = "/campaigns";
  await axiosClient.put(`${BASE_PATH}/${id}`, updatedCampaign);
};
