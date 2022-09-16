<script>
import CardComp from "../components/cardComp.vue";
import imgComp from "../components/imgComp.vue";
export default {
  name: "app",
  components: {
    CardComp,
    imgComp,
  },
};
</script>

<template>
  <div class="fundo">
    <div class="textin">
      <div class="infos">
        <h2>
          Lorem, ipsum dolor sit amet consectetur <strong>adipisicing</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui omnis,
          excepturi assumenda porro nulla iusto. <br />Dolorem sit repudiandae
          impedit minima dignissimos cupiditate voluptatibus optio perspiciatis
          quo deleniti, similique quam nam.
        </p>
        <button>VER MAIS</button>
      </div>
    </div>
  </div>
  <div class="linha"></div>
  <div class="section2">
    <div class="div-display">
      <div class="duvida">
        <imgComp />
      </div>
      <div class="div-cards">
        <CardComp picture_src="src/assets/img/undraw_home_cinema_l7yl.png" />
        <CardComp picture_src="src/assets/img/undraw_horror_movie_3988.png" />
        <CardComp picture_src="src/assets/img/undraw_netflix_q00o.png" />
      </div>
    </div>
    <i class="bx bx-chevrons-down"></i>
  </div>
  <div class="section3">
    <h2 class="filmes">filmes</h2>
  </div>
</template>
