<script>
import CardFilmesComp from "./CardFilmesComp.vue";
export default { components: { CardFilmesComp } };
</script>
<template>
  <div class="section3">
    <div class="filmes-homeview">
      <div>
        <h3 class="PoEmh3">Populares</h3>
        <div class="filmes-linhas">
          <CardFilmesComp />
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
