<script setup>
import CardComp from "../components/cardComp.vue";
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
  <div>
    <CardComp />
    <CardComp />
    <CardComp />
  </div>
</template>
