<script>
import CardFilmesComp from "./CardFilmesComp.vue";
export default {
  components: {
    CardFilmesComp,
  },
  data() {
    return {
      filmes: [],
      filme: {},
    };
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
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
          <CardFilmesComp
            v-for="filme of filmes"
            :key="filme.id"
            :poster="getPosterUrl(filme.poster_path)"
          />
          <CardFilmesComp />
          <CardFilmesComp />
          <CardFilmesComp />
        </div>
      </div>
      <div>
        <h3 class="PoEmh3">Em cartaz</h3>
        <div class="filmes-linhas">
          <CardFilmesComp />
          <CardFilmesComp />
          <CardFilmesComp />
          <CardFilmesComp />
        </div>
      </div>
    </div>
    <div class="tg">
      <h2 class="imagem-h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        expedita aliquam fugiat
      </h2>
    </div>
  </div>
</template>
