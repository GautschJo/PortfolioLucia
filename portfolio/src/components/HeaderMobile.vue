<template>
  <v-app-bar
    style="background-color: rgba(255, 255, 255, 0.4)"
    absolute
    class="mb-8 pb-6"
    height="100"
    scroll-threshold="10"
  >
    <div class="pa-8 pt-10">
      <div>
        <h1>LUCIA BORDONA ALONSO</h1>
      </div>
      <div>
        <h3>
          <span v-if="isModelMaking">Model Making</span
          ><span v-if="isCostumeDesign">Costume Design</span> | Set Design
        </h3>
      </div>
    </div>
    <v-spacer />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props"></v-btn>
      </template>

      <v-list style="background-color: #fee6c4">
        <v-list-item v-for="(item, i) in filteredItems" :key="i">
          <v-list-item-title
            style="
              font-family: Quicksand-Light, sans-serif;
              color: #784910;
              cursor: pointer;
            "
            @click="handleClick(item.value)"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Model Making", value: "model", require: "modelMaking" },
      { title: "Costume Design", value: "costume", require: "costumeDesign" },
      { title: "Set Design", value: "set" },
      { title: "Sketches", value: "sketches" },
      { title: "About Me", value: "about" },
    ],
  }),
  methods: {
    handleClick(value) {
      this.$emit("tabChanged", value);
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        // Wenn kein "require" gesetzt ist, immer anzeigen
        if (!item.require) return true;

        // Prüfen, ob der Pfad den geforderten String enthält
        return this.$route.path
          .toLowerCase()
          .includes(item.require.toLowerCase());
      });
    },
    isModelMaking() {
      return this.$route.path.includes("modelMaking");
    },
    isCostumeDesign() {
      return this.$route.path.includes("costumeDesign");
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
