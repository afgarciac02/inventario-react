import axios from 'axios';

const API = 'https://inventarioback.azurewebsites.net/'

const getData = async (endpoint) => {
    const res = await axios.get(API+endpoint);
    return await res;
}

const postData = async (endpoint, body) => {
    const res = await axios.post(API+endpoint, body);
    return await res;
}

const deleteData = async (endpoint, body) => {
    const res = await axios.delete(API+endpoint, body);
    return await res;
}