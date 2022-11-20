<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["buscar"]);
const artista = ref("");
function buscar() {
  emit("buscar", artista.value);
}
</script>
<template>
  <div id="tfp" class="todofiltro">
    <div id="filtro-pessoa" class="filtro">
      <div class="tudo">
        <form @submit.prevent="buscar" id="slp" class="sel-filtros">
          <label
            class="people-label"
            placeholder="Buscar por filme ou pessoa"
            for=""
            >Pesquise</label
          >
          <div>
            <input v-model="artista" class="input-" type="text" />
            <button type="submit" class="button-fil" @click="buscar">
                
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
