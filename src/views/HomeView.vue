<script>
import CardComp from "../components/cardComp.vue";
import imgComp from "../components/imgComp.vue";
import FooterComp from "../components/FooterComp.vue";
import FilmesComp from "../components/FilmesComp.vue";
export default {
  name: "app",
  components: {
    CardComp,
    imgComp,
    FooterComp,
    FilmesComp,
},
};
</script>

<template>
  <div class="fundo">
    <div class="textin">
      <div class="infos">
        <h2>
          Bem-vindo ao
          <strong class="sublinhader">M</strong>ark
          <strong class="sublinhader">A</strong>ntony
          <strong class="sublinhader">M</strong>ovies
        </h2>
        <p>
          Filmes, trailers, horários e salas de cinema, Notícias, criticas o
          site de Cinema nº1 do Brasil! As últimas notícias do cinema, trailers
          e entrevistas, horários de filmes, o mais completo banco de dados
          sobre cinema
        </p>
        <button>VER MAIS</button>
      </div>
    </div>
  </div>
  <div class="section2">
    <div class="div-display">
      <div class="duvida">
        <imgComp />
      </div>
      <div class="div-cards">
        <CardComp
          dicas="Acompanhe canais de críticos de cinema e produções de TV"
          picture_src="src/assets/img/undraw_home_cinema_l7yl.png"
        />
        <CardComp
          dicas="Acesse sites e apps que indicam filmes e séries fora do óbvio"
          picture_src="src/assets/img/undraw_horror_movie_3988.png"
        />
        <CardComp
          dicas="Acompanhe perfis do Instagram com frases de filmes e séries"
          picture_src="src/assets/img/undraw_netflix_q00o.png"
        />
      </div>
    </div>
  </div>
  <FilmesComp />
  <FooterComp />
</template>
