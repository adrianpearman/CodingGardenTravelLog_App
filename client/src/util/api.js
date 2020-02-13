import axios from "axios";

export const listLogEntries = async () => {
  const response = await axios.get(`/api/logs`);
  return response.data;
};

export const createLogEntry = async entry => {
  const apiKey = entry.apiKey;
  delete entry.apiKey;
  const headers = {
    "X-APIKEY": apiKey
  };
  const response = await axios.post(`/api/logs`, entry, {
    headers: headers
  });
  const data = response.data;
  console.log(response);
  if (response.statusText === "OK") {
    return data;
  }
  const error = new Error(response.message);
  error.response = response;
  throw error;
};
