<script>
export default {
  name: "PictureCard",
  props: {
    picture_src: String,
    pic_desc: String,
  },
};
</script>
<template>
  <div class="cards">
    <img :src="picture_src" />
    <h3>lorem lorem</h3>
  </div>
</template>
