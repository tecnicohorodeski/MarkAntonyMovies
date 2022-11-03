<script>
import CardFilmesSection3 from "./CardFilmesSection3.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: {
    CardFilmesSection3,
  },
  data() {
    return {
      filmes: [],
      filmesPop: [],
      filme: {},
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOs4Filmes();
    this.filmesPop = await filmeapi.BuscarTodosEmCartaz();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div class="section3">
    <div>
      <div>
        <h3 class="PoEmh3">Populares</h3>
        <div class="filmes-linhas">
          <CardFilmesSection3
            v-for="filme of filmes"
            :key="filme.id"
            :link_filme="filme"
            :poster="getPosterUrl(filme.poster_path)"
            :nome_fsa="filme.title"
          />
        </div>
      </div>
      <div>
        <h3 class="PoEmh3">Em cartaz</h3>
        <div class="filmes-linhas">
          <CardFilmesSection3
            v-for="filme of filmesPop"
            :link_filme="filme"
            :key="filme.id"
            :nome_fsa="filme.title"
            :poster="getPosterUrl(filme.poster_path)"
          />
        </div>
      </div>
    </div>
    <div class="tg">
      <h2 class="imagem-h2">
        "A finalidade do cinema é a de nos transportar ao reino da beleza.”
        <br />
        -Charles Chaplin
      </h2>
    </div>
  </div>
</template>
