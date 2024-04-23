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
import Set from "@/components/Costume.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
export default {
  components: { HeaderMobile, Header, Portfolio, AboutMe },
  data() {
    return {
      tab: "home",
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
        case "set":
          return Set;
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
  background-size: 85%;
  background-attachment: fixed;
}
</style>
