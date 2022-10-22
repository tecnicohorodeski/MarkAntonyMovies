<script>
import axios from "axios";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
export default {
  data() {
    return {
      idiomas: [],
      classificacoes: [],
      classificacao: "",
      idioma: "",
      genero: "",
      generos: [],
    };
  },
  async created() {
    this.generos = await filtrosapi.buscarTodosOsGeneros();
    this.classificacoes = await filtrosapi.buscarTodasAsClassificacoes();
    this.idiomas = await filtrosapi.buscarTodosOsIdiomas();
  },
  methods: {
    async buscar() {
      const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
      const { data } = await axios.get(url);
      this.filme = data;
    },
  },
};
</script>
<template>
  <div class="todofiltro">
    <div class="filtro">
      <h3 class="">Filtrar</h3>
      <div class="tudo">
        <div class="sel-filtros">
          <label placeholder="Buscar por filme ou pessoa" for=""
            >Pesquise</label
          >
          <input v-model="filme" type="text" />
        </div>
        <div class="sel-filtros">
          <label for="genre">Gêneros</label>
          <select v-model="generos" id="genre">
            <option disabled value="">Escolha um gênero</option>
            <option
              v-for="genero of generos"
              :key="genero.id"
              :value="genero.id"
            >
              {{ genero.name }}
            </option>
          </select>
        </div>
        <div class="sel-filtros">
          <label for="lg">Idiomas</label>
          <select v-model="idiomas" id="lg">
            <option disabled value="">Escolha um idioma</option>
            <option
              v-for="idioma of idiomas"
              :key="idioma.iso_639_1"
              :value="idioma.iso_639_1"
            >
              {{ idioma.name }}
            </option>
          </select>
        </div>
        <div class="sel-filtros">
          <label for="">Classificação</label>
          <select v-model="classificacoes" id="genre">
            <option disabled value="">Escolha uma classificação</option>
            <option
              v-for="classificacao of classificacoes"
              :key="classificacao.order"
              :value="classificacao.order"
            >
              {{ classificacao.certification }}
            </option>
          </select>
        </div>
        <button class="button-fil" @click="buscar()">Buscar</button>
      </div>
    </div>
  </div>
</template>
