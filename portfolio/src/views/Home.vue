<template>
  <v-app class="bg">
    <HeaderMobile
      v-if="$vuetify.display.width < 1150"
      @tabChanged="handleChange"
    />
    <Header v-else @tabChanged="handleChange" />
    <v-main>
      <v-container style="max-width: 1400px">
        <v-row justify="center" align="center" class="pt-10">
          <v-col class="text-center pb-10">
            <v-btn to="/costumeDesign" color="#784910"> Costume Design </v-btn>
          </v-col>
          <v-col class="text-center">
            <v-btn to="/modelMaking" color="#784910"> Model Making </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";
import AboutMe from "@/components/AboutMe.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import CostumeDesign from "@/views/CostumeDesign.vue";
export default {
  components: { CostumeDesign, HeaderMobile, Header, Portfolio, AboutMe },
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
  computed: {},
};
</script>

<style scoped>
.bg {
  background-image: url("@/assets/BG.jpeg");
  background-size: 85%;
  background-attachment: fixed;
}
</style>
