import axios from "axios";

export const listLogEntries = async () => {
  const response = await axios.get(`/api/logs`);
  return response.data;
};

export const createLogEntry = async entry => {
  const response = await axios.post(`/api/logs`, entry);
  return response.data;
};
