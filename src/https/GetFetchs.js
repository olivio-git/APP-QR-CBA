import axios from "axios";
import { apiUrl,apiPlus } from "../config/configGlobal.json";

export const getEvents = async () => {
  return await axios.get(`http://${apiUrl}/appi/datosevento`);
}; 

export const getEventDetail = async (id) => {
  return await axios.get(`http://${apiUrl}/appi/event/getById/${id}`);
};
export const getStudentDetail = async (gestion,mes,token) => {
 return await axios.get(`http://${apiPlus}/api/v1/std/datosParalelo/${gestion}/${mes}`,{
  headers:{
    Authorization: `Bearer ${token}`
  }
 }); 
}