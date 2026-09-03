<template>
  <Gallery :previews="previews" :originals="originals" />
</template>

<script>
// 01_compress_new.jpg (1400px preview) pairs with 1.png (1920px original), etc.
// ponytail: options must be inline literals, import.meta.glob is resolved at parse time
const previews = import.meta.glob("/src/assets/MODEL_MAKING/*_compress_new.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const originals = import.meta.glob("/src/assets/MODEL_MAKING/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

export default {
  data() {
    return { previews, originals };
  },
};
</script>

<style scoped></style>
