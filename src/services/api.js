import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchData = async () => {
  const response = await api.get("/data");
  return response.data;
};