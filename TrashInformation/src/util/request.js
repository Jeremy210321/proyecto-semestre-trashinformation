import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const request = async (url, body) => {
  let respuesta;

  const headers = {
    uuid: uuidv4(),
  };

  try {
    const response = await axios.post(url, body, { headers });
    respuesta = response.data["respuesta"];

    /*
    respuesta = {
      status: response.status,
      data: response.data[peticion.key],
    };


     */
  } catch (error) {
    /*
    respuesta = {
      status: error.response.status,
      data: error.response.data.respuesta,
    };

       */
    console.log("error", error);
  }

  return respuesta;
};
