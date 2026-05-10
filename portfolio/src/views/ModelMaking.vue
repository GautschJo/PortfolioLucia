<template>
  <v-app class="bg">
    <HeaderMobile
      v-if="$vuetify.display.width < 1150"
      @tabChanged="handleChange"
    />
    <Header v-else @tabChanged="handleChange" />
    <v-main>
      <v-container style="max-width: 1400px">
        <component :is="selectedComponent" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";
import AboutMe from "@/components/AboutMe.vue";
import Model from "@/components/Model.vue";
import Costume from "@/components/Costume.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import Sketches from "@/components/Sketches.vue";
export default {
  components: { HeaderMobile, Header, Portfolio, AboutMe },
  data() {
    return {
      tab: "model",
    };
  },
  methods: {
    handleChange(tabValue) {
      this.tab = tabValue;
    },
  },
  computed: {
    selectedComponent() {
      switch (this.tab) {
        case "home":
          return Portfolio;
        case "model":
          return Model;
        case "costume":
          return Costume;
        case "sketches":
          return Sketches;
        case "about":
          return AboutMe;
        default:
          return Portfolio;
      }
    },
  },
};
</script>

<style scoped>
.bg {
  background-image: url("@/assets/BG.jpeg");
  background-size: cover; /* 'cover' füllt die gesamte Fläche aus */
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund mindestens den Bildschirm füllt */
}
</style>
