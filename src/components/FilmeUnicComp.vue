<script>
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  props: {
    poster: String,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
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
    <div>
      <img class="poster" :src="poster" alt="" />
    </div>
  </main>
</template>
