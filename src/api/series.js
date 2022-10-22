import axios from "axios";
export default class SeriesApi {
  async BuscarTodasAsSeries() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=df0a1976ab5aa969146a8dbff08f0123&language=en-US&page=1"
    );
    return response.data.results;
  }
}