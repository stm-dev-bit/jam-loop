/**
 * @file campaignTypes.ts
 *
 * This file contains TypeScript type definitions for the campaign data
 * structure returned by the API. These types help ensure that the data
 * used in the application matches the expected structure provided by
 * the backend.
 *
 * @module campaignTypes
 */

/**
 * Represents a campaign object.
 */
export interface Campaign {
  /**
   * Unique identifier for the campaign.
   */
  _id: string;

  /**
   * The name of the campaign.
   */
  name: string;

  /**
   * The budget for the campaign.
   */
  budget: string;

  /**
   * The start date of the campaign.
   */
  startDate: string;

  /**
   * The end date of the campaign.
   */
  endDate: string;

  /**
   * The target demographic for the campaign.
   */
  demographic: string;

  /**
   * The geographic location targeted by the campaign.
   */
  geo: string;

  /**
   * A list of inventory items related to the campaign.
   */
  inventory: string[];

  /**
   * A list of devices targeted by the campaign.
   */
  devices: string[];

  /**
   * The username associated with the campaign.
   */
  username: string;
}

export type CreateCampaign = Omit<Campaign, "_id">;

export type UpdateCampaign = CreateCampaign;
