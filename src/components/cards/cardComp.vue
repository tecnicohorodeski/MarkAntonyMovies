<script>
export default {
  name: "PictureCard",
  props: {
    picture_src: String,
    pic_desc: String,
    dicas: String,
  },
  methods: {
    getImg(addr) {
      return `https://markantonymovies.surge.sh/img/${addr}`;
    },
  },
};
</script>
<template>
  <div class="cards">
    <img class="icones" :src="getImg(this.picture_src)" />
    <h3>{{ dicas }}</h3>
  </div>
</template>
