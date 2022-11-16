<script>
import axios from "axios";
import CardPessoaComp from "../components/CardPessoaComp.vue";
import FilmeApi from "../api/filmes.js";
import FiltrosApi from "../api/filtros.js";
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
    };
  },
  components: {
    CardPessoaComp,
  },
  props: {
    poster: String,
    nome_filme: String,
    sinopse_filme: String,
    data_lancamento: Number,
    duracao: Number,
    genero_filme: String,
    generos: Array,
  },
  async created() {
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    const url = `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.artistas = data;
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
      <img class="poster" :src="poster" alt="" />
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
            <!--
              <h3 v-for="genre in genres" :key="genre.id">
                {{ genre.name }}
              </h3>
            -->
          </div>
        </div>
        <div class="sinopse">
          <p>
            {{ sinopse_filme }}
          </p>
        </div>
        <div class="elenco">
          <h2 class="elenco-h2">Elenco</h2>
          <CardPessoaComp
            v-for="artista of artistas"
            :nome_fsa="artista.name"
            :key="artista.id"
            :poster="getPosterUrl(artista.profile_path)"
          />
        </div>
      </div>
    </div>
    <div class="trailer"></div>
  </main>
</template>
