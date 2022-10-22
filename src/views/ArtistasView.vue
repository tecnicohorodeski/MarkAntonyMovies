<script>
import CardFilmesComp from "../components/CardFilmesComp.vue";
import FiltroPessoaComp from "../components/filtroPeopleComp.vue";
import ArtistasApi from "../api/artistas.js";
const artistasapi = new ArtistasApi();
export default {
  components: { CardFilmesComp, FiltroPessoaComp },
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
  },
};
</script>
<template>
  <div class="filmes">
    <FiltroPessoaComp />
    <div class="todos-filmes">
      <CardFilmesComp
        v-for="artista of artistas"
        :key="artista.person_id"
        :poster="getPosterUrl(artista.profile_path)"
      />
    </div>
  </div>
</template>
