<script>
import axios from "axios";
import CardPessoaComp from "../components/cards/CardPessoaComp.vue";
import FiltroPessoaComp from "../components/filtros/filtroPeopleComp.vue";
import ArtistasApi from "../api/artistas.js";
const artistasapi = new ArtistasApi();
export default {
  components: { CardPessoaComp, FiltroPessoaComp },
  data() {
    return {
      artistas: [],
    };
  },
  async created() {
    this.artistas = await artistasapi.BuscarTodosOsArtistas();
  },
  methods: {
    getPosterUrl(profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    },
    async buscar(artista) {
      if (artista === "") {
        this.artistas = await artistasapi.BuscarTodosOsArtistas();
      } else {
        const url = `https://api.themoviedb.org/3/search/person?api_key=df0a1976ab5aa969146a8dbff08f0123&language=en-US&query=${artista}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.artistas = data.results;
      }
    },
  },
};
</script>
<template>
  <!-- <div id="tfp" class="todofiltro">
    <div id="filtro-pessoa" class="filtro">
      <div class="tudo">
        <form @submit.prevent="buscar" id="slp" class="sel-filtros">
          <label
            class="people-label"
            placeholder="Buscar por filme ou pessoa"
            for=""
            >Pesquise</label
          >
          <input v-model="artista" type="text" />
          <button type="submit" class="button-fil" @click="buscar()">
            Buscar
          </button>
        </form>
      </div>
    </div>
  </div> -->
  <FiltroPessoaComp @buscar="buscar" />
  <div class="filmes">
    <div class="todos-filmes">
      <CardPessoaComp
        v-for="artista of artistas"
        :nome_fsa="artista.name"
        :link_filme="filme"
        :key="artista.id"
        :poster="getPosterUrl(artista.profile_path)"
      />
    </div>
  </div>
</template>
