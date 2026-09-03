<template>
  <div style="margin: 30px auto 0; max-width: 1200px;">
    <v-row
      v-for="(image, index) in images"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img :src="image.img" style="cursor: zoom-in" @click="zoom = image.img" />
    </v-row>

    <!-- ponytail: one shared dialog, img capped to the viewport -->
    <v-dialog
      :model-value="!!zoom"
      @update:model-value="zoom = null"
      width="auto"
      max-width="none"
    >
      <img
        :src="zoom"
        style="display: block; max-width: 95vw; max-height: 95vh; cursor: zoom-out"
        @click="zoom = null"
      />
    </v-dialog>
  </div>
</template>

<script>
import imgUrl1 from "/src/assets/MODEL_MAKING/1.png";
import imgUrl2 from "/src/assets/MODEL_MAKING/2.png";
import imgUrl3 from "/src/assets/MODEL_MAKING/3.png";
import imgUrl4 from "/src/assets/MODEL_MAKING/4.png";
import imgUrl5 from "/src/assets/MODEL_MAKING/5.png";
import imgUrl6 from "/src/assets/MODEL_MAKING/6.png";
import imgUrl7 from "/src/assets/MODEL_MAKING/7.png";
import imgUrl8 from "/src/assets/MODEL_MAKING/8.png";
import imgUrl9 from "/src/assets/MODEL_MAKING/9.png";
import imgUrl10 from "/src/assets/MODEL_MAKING/10.png";
import imgUrl11 from "/src/assets/MODEL_MAKING/11.png";


export default {
  data() {
    return {
      zoom: null,
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
