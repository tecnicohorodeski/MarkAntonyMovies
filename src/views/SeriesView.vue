<script>
import CardFilmesComp from "../components/CardFilmesComp.vue";
import FiltroComp from "../components/filtroComp.vue";
import SeriesApi from "../api/series.js";
const seriesapi = new SeriesApi();
export default {
  components: { CardFilmesComp, FiltroComp },
  data() {
    return {
      series: [],
    };
  },
  async created() {
    this.series = await seriesapi.BuscarTodasAsSeries();
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
        v-for="serie of series"
        :key="serie.id"
        :poster="getPosterUrl(serie.poster_path)"
      />
    </div>
  </div>
</template>
