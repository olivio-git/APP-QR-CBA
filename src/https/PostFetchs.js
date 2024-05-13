import axios from "axios";
import { apiUrl, apiPlus } from "../config/configGlobal.json";

 
export const userLoginPost = async (user) => { 
  const format = {
    correo: user.email,
    password: user.password,
  };
  return await axios.post(`http://${apiUrl}/appi/users/login`, format, {
      withCredentials: true,
      contentType: "application/json",
    });
};

export const responseData = async () => {
  return await axios.get(`https://${apiUrl}/appi/datosevento`);
};
export const validateSessionWebApi = async (token) => { 
  return await axios.post(`http://${apiUrl}/appi/users/valid/token/mobile`, {
    token,
  });
}; 
export const generateQrCode = async (data) => {
  // const hasSpecialCharacter = token.includes("|");
  return await axios.post(`https://${apiUrl}/appi/QR/generarQR`, data);
};
export const uploadFle = async (fs) => {
  return await axios.post(`https://${apiUrl}/appi/files/upload`, {
    filePath: fs,
    type: "image",
  });
};

export const createEvent = async (fs) => {
  return await axios.post(`https://${apiUrl}/appi/datosevento/create`, fs);
};
