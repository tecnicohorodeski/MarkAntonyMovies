<script>
import axios from "axios";
export default {
  data() {
    return {
      artistas: [],
      artista: {},
    };
  },
  methods: {
    async buscar() {
      const url = `https://api.themoviedb.org/3/person/${this.person_id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
      const { data } = await axios.get(url);
      this.artista = data;
    },
  },
};
</script>
<template>
  <div id="tfp" class="todofiltro">
    <div id="filtro-pessoa" class="filtro">
      <div class="tudo">
        <div id="slp" class="sel-filtros">
          <label
            class="people-label"
            placeholder="Buscar por filme ou pessoa"
            for=""
            >Pesquise</label
          >
          <input v-model="person_id" type="text" />
        </div>
        <button class="button-fil" @click="buscar()">Buscar</button>
      </div>
    </div>
  </div>
</template>
