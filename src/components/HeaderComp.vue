<script>
export default {};
</script>
<template>
  <header>
    <nav>
      <div class="divlogo">
        <router-link id="logo" to="/">
          <h1><strong>MA</strong>M</h1>
        </router-link>
      </div>
      <div class="links">
        <router-link class="links-router" to="/filmes"> Filmes </router-link>
        <router-link class="links-router" to="/series"> Séries </router-link>
        <router-link class="links-router" to="/artistas"> Artistas </router-link>
        <a class="links-router" href="#">Sobre</a>
      </div>
    </nav>
  </header>
</template>
