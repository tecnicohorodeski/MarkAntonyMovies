<script>
export default {
  props: {
    poster: String,
  },
};
</script>
<template>
  <div class="container">
    <img class="cardfilmes" :src="poster" />
    <div class="overlay">
      <div class="text">Hello World</div>
    </div>
  </div>
</template>
