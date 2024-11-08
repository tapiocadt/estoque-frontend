import axios from 'axios';
import { APIlink } from './APIConfig';

export const getItens = async () => {
  try {
    const response = await axios.get(`${APIlink}/item`);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    return [];
  }
}

export const getItem = async (id) => {
  try {
    const response = await axios.get(`${APIlink}/item/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    return [];
  }
}

export const postItem = async (item) => {
  // try {
  const response = await axios.post(`${APIlink}/item`, {
      "image": item.image,
      "name": item.name,
      "totalQuantity": item.totalQuantity,
      "freeQuantity": item.freeQuantity,
      "minQuantity": item.minQuantity
    })

    return response;
  // } catch (error) {
  //   return "erro no envio"
  // } 
}

export const updateItem = (item) => {
  axios.get(`${APIlink}/item`, {
    "id": item.id,
    "image": item.image,
    "name": item.name,
    "totalQuantity": item.totalQuantity,
    "freeQuantity": item.freeQuantity,
    "minQuantity": item.minQuantity
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}