import axios from "axios";
export default class GeneroApi {
  async BuscarTodosOsGeneros() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR"
    );
    return response.data;
  }

  async buscarGeneros(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR/${id}`
    );
    return response.data;
  }
  async atualizarGeneros(genre) {
    const response = await axios.put(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR/${genre.id}`,
      genre
    );
    return response.data;
  }
}
