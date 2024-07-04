<template>
  <div style="margin-top: 30px">
    <v-row
      v-for="(image, index) in imagesHowl"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img :src="image.img" />
    </v-row>
    <v-divider
      color="#cf8946"
      style="margin-bottom: 40px; opacity: 0.6 !important"
      thickness="2"
    />
    <v-row
      v-for="(image, index) in imagesTV"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img :src="image.img" />
    </v-row>
  </div>
</template>

<script>
import imgUrl1 from "/src/assets/PORTFOLIO/01_compress.png";
import imgUrl2 from "/src/assets/PORTFOLIO/02_compress.png";
import imgUrl3 from "/src/assets/PORTFOLIO/03_compress.png";
import imgUrl4 from "/src/assets/PORTFOLIO/04_compress.png";
import imgUrl5 from "/src/assets/PORTFOLIO/05_compress.png";
import imgUrl6 from "/src/assets/PORTFOLIO/06_compress.png";
import imgUrl7 from "/src/assets/PORTFOLIO/07_compress.png";
import imgUrl8 from "/src/assets/PORTFOLIO/08_compress.png";
import imgUrl9 from "/src/assets/PORTFOLIO/09_compress.png";
import imgUrl10 from "/src/assets/PORTFOLIO/10_compress.png";
import imgUrl11 from "/src/assets/PORTFOLIO/11_compress.png";

export default {
  data() {
    return {
      imagesHowl: [
        { img: imgUrl1 },
        { img: imgUrl2 },
        { img: imgUrl3 },
        { img: imgUrl4 },
        { img: imgUrl5 },
        { img: imgUrl6 },
        { img: imgUrl7 },
        { img: imgUrl8 },
        { img: imgUrl9 },
      ],
      imagesTV: [{ img: imgUrl10 }, { img: imgUrl11 }],
    };
  },
};
</script>

<style scoped></style>
