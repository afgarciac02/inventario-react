import axios from "axios";

// const API = "https://inventarioback.azurewebsites.net/api/";
// const API = "http://localhost:3000/api/";
const API = "https://d754-190-242-99-252.ngrok.io/api/";


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

export const getDummy = () => {
  return [
    { "id": 1, "name": "Iphone 11", "brand": "Apple", "quantity": 20, "price": 1500000 },
    { "id": 3, "name": "Iphone 14", "brand": "Apple", "quantity": 20, "price": 1500000 },
    { "id": 5, "name": "S20", "brand": "Samsung", "quantity": 10, "price": 1000000 }
  ]
}
