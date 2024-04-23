<template>
  <div style="margin-top: 30px">
    <v-row
      v-for="(image, index) in images"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img :src="image.img" />
    </v-row>
  </div>
</template>

<script>
import imgUrl1 from "/src/assets/MODEL_MAKING/01_compress.jpg";
import imgUrl2 from "/src/assets/MODEL_MAKING/02_compress.png";
import imgUrl3 from "/src/assets/MODEL_MAKING/03_compress.png";
import imgUrl4 from "/src/assets/MODEL_MAKING/04_compress.png";
import imgUrl5 from "/src/assets/MODEL_MAKING/05_compress.png";
import imgUrl6 from "/src/assets/MODEL_MAKING/06_compress.jpg";

export default {
  data() {
    return {
      images: [
        { img: imgUrl1 },
        { img: imgUrl2 },
        { img: imgUrl3 },
        { img: imgUrl4 },
        { img: imgUrl5 },
        { img: imgUrl6 },
      ],
    };
  },
};
</script>

<style scoped></style>
