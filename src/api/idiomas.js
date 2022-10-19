import axios from "axios";
export default class IdiomasApi {
  async buscarTodosOsIdiomas() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/configuration/languages?api_key=df0a1976ab5aa969146a8dbff08f0123"
    );
    return data.languages;
  }
}
