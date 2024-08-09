/**
 * @file axiosClient.ts
 *
 * This file sets up a custom Axios instance for making HTTP requests
 * in the application. It configures the base URL for the API using
 * the `NEXT_PUBLIC_API_URL` environment variable and sets default
 * headers for JSON content.
 *
 * The Axios instance also includes a response interceptor to handle
 * errors globally, ensuring that any HTTP errors are returned as
 * rejected promises, which can be caught and handled by the caller.
 *
 * @module axiosClient
 */

import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
