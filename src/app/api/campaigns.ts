import axiosClient from "./axiosClient";

const BASE_PATH = "/campaigns";

export const fetchCampaigns = async () => {
  const username = localStorage.getItem("username");
  const response = await axiosClient.get(BASE_PATH);
  return response.data.filter(
    (campaign: any) => campaign.username === username
  );
};

export const createCampaign = async (campaign: any) => {
  const username = localStorage.getItem("username");
  return axiosClient.post(BASE_PATH, { ...campaign, username });
};

export const updateCampaign = async (id: string, updatedCampaign: any) => {
  return axiosClient.put(`${BASE_PATH}/${id}`, updatedCampaign);
};

export const deleteCampaign = async (id: string) => {
  return axiosClient.delete(`${BASE_PATH}/${id}`);
};
