<script>
import axios from "axios";
import FilmeUnicComp from "../components/FilmeUnicComp.vue";
import FilmeApi from "../api/filmes.js";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
const filmeapi = new FilmeApi();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
      genre: {},
      genres: [],
    };
  },
  components: {
    FilmeUnicComp,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div>
    <FilmeUnicComp
      v-model="filme"
      :nome_filme="filme.title"
      :data_lancamento="filme.release_date"
      :duracao="filme.runtime"
      :sinopse_filme="filme.overview"
      :generos="filme.genres"
      :key="filme.id"
      :poster="getPosterUrl(filme.poster_path)"
    />
  </div>
  <!-- :genero_filme="filme.genres.name" -->
</template>
