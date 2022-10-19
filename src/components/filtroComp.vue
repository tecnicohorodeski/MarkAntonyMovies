<script>
import GenerosApi from "@/api/genero.js";
import IdiomasApi from "@/api/idiomas.js";
const idiomasApi = new IdiomasApi();
const generosApi = new GenerosApi();
export default {
  data() {
    return {
      idiomas: [],
      idioma: "",
      genero: "",
      generos: [],
    };
  },
  async created() {
    this.generos = await generosApi.buscarTodosOsGeneros();
    this.idiomas = await idiomasApi.buscarTodosOsIdiomas();
  },
};
/* import FilmeApi from "@/api/filmes.js";
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
*/
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
        <select v-model="generos" id="genre">
          <option disabled value="">Escolha um gênero</option>
          <option v-for="genero of generos" :key="genero.id" :value="genero.id">
            {{ genero.name }}
          </option>
        </select>
      </div>
      <div class="sel-filtros">
        <label for="lg">Idiomas</label>
        <select v-model="idiomas" id="lg">
          <option disabled value="">Escolha um gênero</option>
          <option
            v-for="idioma of idiomas"
            :key="idioma.iso_639_1"
            :value="idioma.iso_639_1"
          >
            {{ idioma.iso_639_1 }}
          </option>
        </select>
      </div>
      <div class="sel-filtros">
        <label for="">Classificação</label>
        <select v-model="generos" id="genre">
          <option disabled value="">Escolha um gênero</option>
          <option
            v-for="genero of generos"
            :key="genero.iso_639_1"
            :value="genero.iso_639_1"
          >
            {{ genero.iso_639_1 }}
          </option>
        </select>
      </div>
      <button @click="buscar">Buscar</button>
    </div>
  </div>
</template>
