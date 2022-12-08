<script>
import axios from "axios";
import FilmeUnicComp from "../components/filmes/FilmeUnicComp.vue";
import FilmeApi from "../api/filmes.js";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
const filmeapi = new FilmeApi();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
      cast: [],
      artista: {},
      genre: {},
      genres: [],
    };
  },
  components: {
    FilmeUnicComp,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    this.genres = await filtrosapi.buscarTodosOsGenerosFilme();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
    this.cast = await filmeapi.buscarElenco(this.id);
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <main class="TudoDaPaginaUnica">
    <img class="poster" :src="getPosterUrl(filme.poster_path)" alt="" />
    <div class="BelissimaClasseOndeVaiConterTodaEssaEnormePagina">
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
  </main>
</template>
