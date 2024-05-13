import React, { createContext, useState } from "react";
import { getEvents } from "../https/GetFetchs";
import { 
  validateSessionWebApi,
} from "../https/PostFetchs";

import { loginKey } from "../config/configGlobal.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => { 
  const [auth, setAuth] = useState({
    //contexto de usuario logeado
    user: null,
  });
  const [dataEvents, setDataEvents] = useState({
    //contexto de eventos
    data: null,
    indicator: false,
  });
  const [selectedEventoDetails, setSelectEventDetails] = useState(null); //contexto de estado
  const [dataEventDetail, setDataEventoDetail] = useState(null);
  //avat default profile
  const [ avatar,setAvatar ] =useState("https://i.ibb.co/yykRrr3/3d-illustration-boy-wearing-cap-glasses-with-backpack.jpg");
  const [profileXtraData , setProfileXtraData] = useState(null);
  const setDataAuth = (data) => {
    setAuth({
      ...auth,
      user: data,
    });
  };
  const handleChargeDataEvents = async () => {
    try {
      setDataEvents({
        ...dataEvents,
        indicator: true,
      });
      const response = await getEvents();
      console.log(response.data.results.datosEvento);
      setDataEvents({
        ...dataEvents,
        data: response.data.results.datosEvento,
        indicator: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetSelectedEvent = (value) => {
    setSelectEventDetails(value);
  };
  const handleSetDataEventDetails = (value) => {
    setDataEventoDetail(value);
  };
  const handleValidateSession = async () => {
    const token = await AsyncStorage.getItem(loginKey);
    if (token) { 
      try {
        const response = await validateSessionWebApi(token); 
        setDataAuth(response.data.user);
        return response.data.user;
      } catch (error) {
        console.error("Error al validar la sesión WebApi:", error);
      } 
    }
  };
  const STATES_MODIFIC = {
    auth,
    setDataAuth,
    dataEvents,
    setDataEvents,
    handleChargeDataEvents,
    selectedEventoDetails,
    handleSetSelectedEvent,
    dataEventDetail,
    handleSetDataEventDetails,
    handleValidateSession,
    avatar,
    profileXtraData,
    setProfileXtraData
  };
  return (
    <DataContext.Provider value={STATES_MODIFIC}>
      {children}
    </DataContext.Provider>
  );
};
