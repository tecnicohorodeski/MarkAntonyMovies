<script>
export default {
  methods: {
    getPosterUrl(profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    },
  },
};
</script>
<template>
    rola
  <img class="poster" src="{{ getPosterUrl(filme.poster_path) }}" alt="" />
</template>
