import axios from "axios";
export default class FilmeApi {
  async BuscarTodosOs4Filmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1"
    );
    return response.data.results.slice(0, 4);
  }
  async atualizarFilme(filme) {
    const response = await axios.put(
      `https://api.themoviedb.org/3/search/movie?api_key=df0a1976ab5aa969146a8dbff08f0123&language=en-US&page=1&include_adult=false${filme}`,
      filme
    );
    return response.data.results;
  }
  async pesquisarFilmes() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1&include_adult=false`,
    );
    return response.data.results;
  }
  async BuscarTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async BuscarTodosEmCartaz() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=df0a1976ab5aa969146a8dbff08f0123&language=en-US&page=1"
    );
    return response.data.results.slice(0, 4);
  }
}