/**
 * Definición de servicio api que nos permitirá consumir endpoints definidos por la API_URL
 * La API_URL se ha definido dentro del archivo .env como variable de entorno.
 * En este archivo podemos definir datos confidenciales como TOKENS, sin embargo la Api de Reddit
 * es libre por lo que no fue necesario implementar el envio de token a través del header de los Requests HTTP
 */
import axios from "axios";
import { API_URL } from "@env";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
