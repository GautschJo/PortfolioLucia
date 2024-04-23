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
import imgUrl1 from "/src/assets/COSTUME_DESIGN/01_compress.png";
import imgUrl2 from "/src/assets/COSTUME_DESIGN/02_compress.jpg";
import imgUrl3 from "/src/assets/COSTUME_DESIGN/03_compress.jpg";
import imgUrl4 from "/src/assets/COSTUME_DESIGN/04_compress.png";

export default {
  data() {
    return {
      images: [
        { img: imgUrl1 },
        { img: imgUrl2 },
        { img: imgUrl3 },
        { img: imgUrl4 },
      ],
    };
  },
};
</script>

<style scoped></style>
