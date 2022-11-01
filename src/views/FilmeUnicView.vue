<script>
import axios from "axios";
import FilmeUnicComp from "../components/FilmeUnicComp.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  components: {
    FilmeUnicComp,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
  },
  methods: {
    getPosterUrl(profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    },
  },
};
</script>
<template>
  <main>
    SOCORRO EDUARDO
    <FilmeUnicComp v-model="filme" :poster="getPosterUrl(filme.poster_path)" />
  </main>
</template>
