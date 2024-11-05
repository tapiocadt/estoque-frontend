import axios from 'axios';
import { APIlink } from './APIConfig';

export const getRequisitions = async () => {
  try {
    const response = await axios.get(`${APIlink}/requisition`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("erro no envio");
    return [];
  }
}

export const getRequisition = (id) => {
  axios.get(`${APIlink}/requisition/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}

export const postRequisition = async (requisition) => {
  try {
    await axios.post(`${APIlink}/requisition`, requisition);
    // console.log(requisition);
    return "requisição enviada";
  } catch (error) {
    return "erro no envio";
  }
}

export const approveRequisition = async (id) => {
  try {
    return await axios.put(`${APIlink}/requisition/${id}/approve`);
    // console.log(`${APIlink}/${id}/approve`);
  } catch (error) {
    return "erro em aprovar";
  }
}

export const deliverRequisition = async (id) => {
  try {
    return await axios.put(`${APIlink}/requisition/${id}/deliver`);
    // console.log(`${APIlink}/${id}/deliver`);
  } catch (error) {
    return "erro em entregar";
  }
}

export const updateRequisition = () => {
  axios.get(`${APIlink}/requisition`, {
    "id": item.id,
    "status": requisition.status,
    "name": requisition.name,
    "email": requisition.email,
    "setor": requisition.setor,
    "motive": requisition.motive,
    "schedule": requisition.schedule,
    "requisitonItens": requisition.requisitonItens
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    })
}