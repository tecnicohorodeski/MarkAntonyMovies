<script>
export default {
  props: {
    poster: String,
    nome_fsa: String,
    link_serie: {
      type: Object,
    },
  },
  methods: {
    UrlDoFilme(id) {
      return `/seriado/${id}`;
    },
  },
};
</script>
<template>
  <div class="container">
    <img class="cardfilmes" :src="poster" />
    <div class="overlay">
      <div class="text">
        <h4 class="nome_filme">{{ nome_fsa }}</h4>
        <router-link :to="UrlDoFilme(link_serie.id)">
          <button class="verMais">VER MAIS</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
