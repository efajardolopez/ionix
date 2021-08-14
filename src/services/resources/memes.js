/**
 * Importamos api (que guarda la configuración de nuestro servicio de ApiRest)
 */
import api from "../api";

/**
 * Definimos un pequeño servicio para la obtención de los datos (memes)
 */
const memes = {
  root: "/r/chile/new/.json",
  /**
   * @param {string} [query=""]
   * @param {string} [after=""]
   * @returns
   */
  getMemes(query = "", after = "") {
    // console.warn(this.root + "?q=" + query + "&limit=100&after=" + after);
    return api
      .get(this.root + "?q=" + query + "&limit=100&after=" + after)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.warn("Error>>>", error);
      });
  },
};
export default memes;
