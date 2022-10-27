<script>
import CardFilmesComp from "../components/CardFilmesComp.vue";
import FiltroComp from "../components/filtroComp.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { CardFilmesComp, FiltroComp },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>
<template>
  <div class="filmes">
    <FiltroComp />
    <div class="todos-filmes">
      <CardFilmesComp
        v-for="filme of filmes"
        :key="filme.id"
        :poster="getPosterUrl(filme.poster_path)"
      />
    </div>
  </div>
</template>
