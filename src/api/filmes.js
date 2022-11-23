import axios from "axios";
export default class FilmeApi {
  async BuscarTodosOs4Filmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1"
    );
    return response.data.results.slice(0, 4);
  }
  async buscarTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR"
    );
    return data.genres;
  }



  async buscarElenco(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`,
    );
    return data.cast;
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
  async Buscar4Artistas() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`
    );
    return response.data.results.slice(0, 4);
  }
  async buscarFilmePorId() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`
    );
    return response.data.results;
  }
  async BuscarFilmesPorGenero(genero) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1&with_genres=${genero}`
    );
    return response.data.results;
  }
}