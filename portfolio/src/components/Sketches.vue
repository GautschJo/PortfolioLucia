<template>
  <div style="margin-top: 30px">
    <v-row style="margin-bottom: 30px">
      <v-img :src="images[0].img" />
    </v-row>
    <v-row style="margin-bottom: 30px">
      <v-img :src="images[1].img" />
    </v-row>
    <v-row style="margin-bottom: 30px">
      <v-col>
        <v-img :src="images[2].img" />
      </v-col>
      <v-col>
        <v-img :src="images[3].img" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import imgUrl1 from "/src/assets/SKETCHES/01_compress.jpg";
import imgUrl2 from "/src/assets/SKETCHES/02_compress.jpg";
import imgUrl3 from "/src/assets/SKETCHES/03_compress.jpg";
import imgUrl4 from "/src/assets/SKETCHES/04_compress.jpg";

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
