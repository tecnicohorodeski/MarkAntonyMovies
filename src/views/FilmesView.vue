<script>
/*testando*/
import axios from "axios";
import CardFilmesComp from "../components/CardFilmesComp.vue";
import FiltroComp from "../components/filtroComp.vue";
import FiltrosApi from "../api/filtros.js";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
const filtrosapi = new FiltrosApi();
export default {
  components: { CardFilmesComp, FiltroComp },
  data() {
    return {
      filmes: [],
      idiomas: [],
      classificacoes: [],
      classificacao: "",
      idioma: "",
      generos: [],
    };
  },
  async created() {
    this.generos = await filtrosapi.buscarTodosOsGeneros();
    this.classificacoes = await filtrosapi.buscarTodasAsClassificacoes();
    this.idiomas = await filtrosapi.buscarTodosOsIdiomas();
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscar(params) {
      if (params.genero !== "") {
        this.filmes = await filmeapi.BuscarFilmesPorGenero(params.genero);
      }
      else if (params.filme === "") {
        this.filmes = await filmeapi.BuscarTodosOsFilmes();
      } else {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&query=${params.filme}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.filmes = data.results;
      }
    },
  },
};
</script>
<template>
  <div class="filmes">
    <FiltroComp @buscar="buscar" />
    <div class="todos-filmes">
      <CardFilmesComp
        v-for="filme of filmes"
        :nome_fsa="filme.title"
        :key="filme.id"
        :link_filme="filme"
        :poster="getPosterUrl(filme.poster_path)"
      />
    </div>
  </div>
</template>
