import api from "../api";

const memes = {
  root: "/r/chile/new/.json",
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
