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
    this.genres = await filtrosapi.buscarTodosOsGeneros();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
    this.cast = await filmeapi.buscarElenco()
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
