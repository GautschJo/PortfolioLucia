<template>
  <div style="margin-top: 30px">
    <v-row
      v-for="(image, index) in howl"
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
      v-for="(image, index) in space"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img :src="image.img" />
    </v-row>
  </div>
</template>

<script>
import imgUrl1 from "/src/assets/COSTUME_DESIGN/01_compress.png";
import imgUrl2 from "/src/assets/COSTUME_DESIGN/02_compress.jpg";
import imgUrl3 from "/src/assets/COSTUME_DESIGN/03_compress.jpg";
import imgUrl4 from "/src/assets/COSTUME_DESIGN/04_compress.png";
import imgUrl5 from "/src/assets/COSTUME_DESIGN/05_compress.png";
import imgUrl6 from "/src/assets/COSTUME_DESIGN/06_compress.png";
import imgUrl7 from "/src/assets/COSTUME_DESIGN/07_compress.png";
import imgUrl8 from "/src/assets/COSTUME_DESIGN/08_compress.png";

export default {
  data() {
    return {
      howl: [
        { img: imgUrl1 },
        { img: imgUrl2 },
        { img: imgUrl3 },
        { img: imgUrl4 },
      ],
      space: [
        { img: imgUrl5 },
        { img: imgUrl6 },
        { img: imgUrl7 },
        { img: imgUrl8 },
      ],
    };
  },
};
</script>

<style scoped></style>
