<template>
  <v-app-bar
    style="background-color: rgba(255, 255, 255, 0.4)"
    scroll-behavior="hide"
    class="mb-8 pb-6"
    height="100"
    scroll-threshold="10"
  >
    <div class="pa-8 pt-10">
      <div>
        <h1>LUCIA BORDONA ALONSO</h1>
      </div>
      <div>
        <h3>Set Design | Model Making | Costume Design</h3>
      </div>
    </div>
    <v-spacer />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props"></v-btn>
      </template>

      <v-list style="background-color: #fee6c4">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title
            style="font-family: Quicksand-Light, sans-serif; color: #784910"
            @click="handleClick(item.value)"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Set Design", value: "home" },
      { title: "Modelmaking", value: "model" },
      { title: "Costumedesign", value: "set" },
      { title: "Sketches", value: "sketches" },
      { title: "About Me", value: "about" },
    ],
  }),
  methods: {
    handleClick(value) {
      this.$emit("tabChanged", value);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-family: "Quicksand-Light", sans-serif;
  color: #784910;
  @media screen and (max-width: 380px) {
    font-size: 21px;
  }
}

h3 {
  font-family: "Quicksand-Light", sans-serif;
  color: #cf8946;
  @media screen and (max-width: 380px) {
    font-size: 10px;
  }
}
</style>
