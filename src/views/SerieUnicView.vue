<script>
import axios from "axios";
import SerieUnicComp from "../components/series/SerieUnicComp.vue";
import SeriesApi from "../api/series.js";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
const seriesapi = new SeriesApi();
export default {
  props: ["id"],
  data() {
    return {
      serie: {},
      cast: [],
      artista: {},
      genre: {},
      genres: [],
    };
  },
  components: {
    SerieUnicComp,
  },
  async created() {
    this.series = await seriesapi.BuscarTodasAsSeries();
    this.genres = await filtrosapi.buscarTodosOsGenerosSerie();
    const url = `https://api.themoviedb.org/3/tv/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.serie = data;
    this.cast = await seriesapi.buscarElenco(this.id);
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
    <img class="poster" :src="getPosterUrl(serie.poster_path)" alt="" />
    <div class="BelissimaClasseOndeVaiConterTodaEssaEnormePagina">
      <SerieUnicComp
        v-model="serie"
        :nome_serie="serie.name"
        :data_lancamento="serie.last_air_date"
        :duracao="serie.number_of_seasons"
        :sinopse_serie="serie.overview"
        :generos="serie.genres"
        :key="serie.id"
        :poster="getPosterUrl(serie.poster_path)"
      />
      <div class="elenco">
        <h2 class="elenco-h2">Elenco</h2>
        <CardPessoaComp
          v-for="artista of cast"
          :nome_fsa="artista.name"
          :key="artista.id"
          :poster="getPosterUrl(artista.poster_path)"
        />
      </div>
    </div>
  </main>
</template>
