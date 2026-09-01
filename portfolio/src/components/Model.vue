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
import imgUrl1 from "/src/assets/MODEL_MAKING/01_compress_new.jpg";
import imgUrl2 from "/src/assets/MODEL_MAKING/02_compress_new.jpg";
import imgUrl3 from "/src/assets/MODEL_MAKING/03_compress_new.jpg";
import imgUrl4 from "/src/assets/MODEL_MAKING/04_compress_new.jpg";
import imgUrl5 from "/src/assets/MODEL_MAKING/05_compress_new.jpg";
import imgUrl6 from "/src/assets/MODEL_MAKING/06_compress_new.jpg";
import imgUrl7 from "/src/assets/MODEL_MAKING/07_compress_new.jpg";
import imgUrl8 from "/src/assets/MODEL_MAKING/08_compress_new.jpg";
import imgUrl9 from "/src/assets/MODEL_MAKING/09_compress_new.jpg";
import imgUrl10 from "/src/assets/MODEL_MAKING/10_compress_new.jpg";
import imgUrl11 from "/src/assets/MODEL_MAKING/11_compress_new.jpg";


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
        { img: imgUrl7 },
        { img: imgUrl8 },
        { img: imgUrl9 },
        { img: imgUrl10 },
        { img: imgUrl11 },


      ],
    };
  },
};
</script>

<style scoped></style>
