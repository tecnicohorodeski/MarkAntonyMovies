<script setup>
/*testando*/
import { ref, defineEmits } from "vue";
const emit = defineEmits(["buscar"]);
const filme = ref("");
function buscar() {
  emit("buscar", filme.value);
}
</script>
<template>
  <div class="todofiltro">
    <div class="filtro">
      <h3 class="">Filtrar</h3>
      <div class="tudo">
        <form @submit.prevent="buscar">
          <div class="sel-filtros">
            <label placeholder="Buscar por filme ou pessoa" for=""
              >Pesquise</label
            >
            <input v-model="filme" type="text" />
          </div>
          <div class="sel-filtros">
            <label for="genre">Gêneros</label>
            <select v-model="generos" id="genre">
              <option disabled value="">Escolha um gênero</option>
              <option
                v-for="genero of generos"
                :key="genero.id"
                :value="genero.id"
              >
                {{ genero.name }}
              </option>
            </select>
          </div>
          <div class="sel-filtros">
            <label for="lg">Idiomas</label>
            <select v-model="idiomas" id="lg">
              <option disabled value="">Escolha um idioma</option>
              <option
                v-for="idioma of idiomas"
                :key="idioma.iso_639_1"
                :value="idioma.iso_639_1"
              >
                {{ idioma.name }}
              </option>
            </select>
          </div>
          <div class="sel-filtros">
            <label for="">Classificação</label>
            <select v-model="classificacoes" id="genre">
              <option disabled value="">Escolha uma classificação</option>
              <option
                v-for="classificacao of classificacoes"
                :key="classificacao.order"
                :value="classificacao.order"
              >
                {{ classificacao.certification }}
              </option>
            </select>
          </div>
          <button class="button-fil" type="submit" @click="buscar">
            Buscar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
