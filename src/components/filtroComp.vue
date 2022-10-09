<script>
import FilmeApi from "@/api/filmes.js";
import GeneroApi from "@/api/genero.js";
const filmeApi = new FilmeApi();
const generoApi = new GeneroApi();
export default {
  data() {
    return {
      filmes: [],
      genres: [],
    };
  },
  async created() {
    this.filmes = await filmeApi.BuscarTodosOsFilmes();
    this.genres = await generoApi.BuscarTodosOsGeneros();
  },
  methods: {
    async buscar() {
      if (this.filme.id) {
        await filmeApi.atualizarfilme(this.filme);
      }
      this.filmes = await filmeApi.BuscarTodosOsFilmes();
      this.genres = await generoApi.BuscarTodosOsGeneros();
      this.filme = {};
    },
  },
};
</script>
<template>
  <div class="todofiltro">
    <div class="filtro">
      <h3 class="">Filtrar</h3>
      <div class="sel-filtros">
        <label placeholder="Buscar por filme ou pessoa" for="">Pesquise</label>
        <input type="text" />
      </div>
      <div class="sel-filtros">
        <label for="genre">Gêneros</label>
        <select v-model="movie.genre" name="" id="genre">
          <option disabled value="">Escolha um gênero</option>
          <option v-for="genre of genres" :key="genre.id" :value="genre.name">
            {{ genre.name }}
          </option>
        </select>
      </div>
      <div class="sel-filtros">
        <label for="">Idiomas</label>
        <select name="" id=""></select>
      </div>
      <div class="sel-filtros">
        <label for="">Classificação</label>
        <select name="" id=""></select>
      </div>
      <button @click="buscar">Buscar</button>
    </div>
  </div>
</template>
