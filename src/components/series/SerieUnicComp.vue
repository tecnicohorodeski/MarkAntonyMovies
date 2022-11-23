<script>
import axios from "axios";
import SeriesApi from "../../api/series.js";
import FiltrosApi from "../../api/filtros.js";
const filtrosapi = new FiltrosApi();
const seriesapi = new SeriesApi();
export default {
  data() {
    return {
      genres: [],
      genre: {},
      name: {},
      artistas: [],
      artista: {},
      serie: "",
    };
  },
  components: {},
  props: {
    poster: String,
    nome_serie: String,
    serie_id: Number,
    sinopse_serie: String,
    data_lancamento: Number,
    duracao: Number,
    genero_serie: String,
    generos: Array,
  },
  async created() {
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    this.series = await seriesapi.BuscarTodasAsSeries();
    //this.artistas = await filmeapi.buscarElenco();
    const url = `https://api.themoviedb.org/3/tv/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.serie = data;
    // const url = `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    // const { data } = await axios.get(url);
    // this.artista = data;
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
    <div class="infosFilme">
      <div class="todasinfos">
        <div class="ndcd">
          <h2 class="nomefilme">{{ nome_serie }}</h2>
          <div class="dcd">
            <h3>{{ data_lancamento }}</h3>
            <h3>{{ duracao }} minutos</h3>
            <div class="generos-div">
              <h3 class="genero-h3" v-for="genero of generos" :key="genero.id">
                {{ genero.name }}
              </h3>
            </div>
          </div>
        </div>
        <div class="sinopse">
          <p>
            {{ sinopse_serie }}
          </p>
        </div>
      </div>
    </div>
    <div class="trailer"></div>
  </main>
</template>
