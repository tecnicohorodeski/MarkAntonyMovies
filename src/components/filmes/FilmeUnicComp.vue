<script>
import axios from "axios";
import FilmeApi from "../../api/filmes.js";
import FiltrosApi from "../../api/filtros.js";
const filtrosapi = new FiltrosApi();
const filmeapi = new FilmeApi();
export default {
  data() {
    return {
      genres: [],
      genre: {},
      name: {},
      artistas: [],
      artista: {},
      filme: "",
    };
  },
  components: {},
  props: {
    poster: String,
    nome_filme: String,
    filme_id: Number,
    sinopse_filme: String,
    data_lancamento: Number,
    duracao: Number,
    genero_filme: String,
    generos: Array,
  },
  async created() {
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
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
    <div class="infosFilme">
      <div class="todasinfos">
        <div class="ndcd">
          <h2 class="nomefilme">{{ nome_filme }}</h2>
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
            {{ sinopse_filme }}
          </p>
        </div>
      </div>
    </div>
    <div class="trailer"></div>
  </main>
</template>
