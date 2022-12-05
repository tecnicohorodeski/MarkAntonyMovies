<script>
import axios from "axios";
import CardSeriesComp from "../components/cards/CardSeriesComp.vue";
import FiltroCompSerie from "../components/filtros/filtroCompSerie.vue";
import FiltrosApi from "../api/filtros.js";
import SeriesApi from "../api/series.js";
const filtrosapi = new FiltrosApi();
const seriesapi = new SeriesApi();
export default {
  components: { CardSeriesComp, FiltroCompSerie },
  data() {
    return {
      series: [],
      generos: [],
    };
  },
  async created() {
    this.generos = await filtrosapi.buscarTodosOsGenerosSerie();
    this.series = await seriesapi.BuscarTodasAsSeries();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscar(params) {
      if (params.genero !== "") {
        this.series = await filtrosapi.BuscarSeriesPorGenero(params.genero);
      } else if (params.serie === "") {
        this.series = await seriesapi.BuscarTodasAsSeries();
      } else {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&query=${params.serie}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.series = data.results;
      }
    },
  },
};
</script>
<template>
  <div class="filmes">
    <FiltroCompSerie @buscar="buscar"/>
    <div class="todos-filmes">
      <CardSeriesComp
        v-for="serie of series"
        :nome_fsa="serie.name"
        :key="serie.id"
        :link_serie="serie"
        :poster="getPosterUrl(serie.poster_path)"
      />
    </div>
  </div>
</template>
