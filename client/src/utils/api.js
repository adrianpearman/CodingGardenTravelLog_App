import axios from "axios";

console.log(import.meta.env);

const axiosClient = axios.create({
  baseURL: import.meta.env.MODE === "production" ? "" : "http://localhost:4000",
  json: true,
});

export const listLogEntry = async () => {
  try {
    const response = await axiosClient.get("/api/logs");
    return response;
  } catch (error) {
    return { data: "An occured!" };
  }
};

export const createLogEntry = async (entry) => {
  try {
    const privateKey = entry.privateKey;
    delete entry.privateKey;
    const response = await axiosClient.post(`/api/logs`, entry, {
      headers: {
        "X-APIKEY": privateKey,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
