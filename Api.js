import axios from "axios";

const API = "https://inventarioback.azurewebsites.net/api/";

export const getData = async (endpoint) => {
  let url = API + endpoint
  const res = await axios.get(url);
  return res.data;
};

export const postData = async (endpoint, body) => {
  let url = API + endpoint;

  const res = await axios.post(url, body);
  return await res.data;
};

export const deleteData = async (endpoint) => {
  const res = await axios.delete(API + endpoint);
  return await res;
};
