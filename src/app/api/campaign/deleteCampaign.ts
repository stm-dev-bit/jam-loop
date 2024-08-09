import axiosClient from "../axiosClient";

/**
 * Deletes a campaign by its ID.
 *
 * @param {string} id - The ID of the campaign to be deleted.
 * @returns {Promise<void>} A promise that resolves when the campaign is deleted.
 */
export const deleteCampaign = async (id: string): Promise<void> => {
  const BASE_PATH = "/campaigns";
  await axiosClient.delete(`${BASE_PATH}/${id}`);
};
