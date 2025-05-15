<template>
  <v-app-bar
    height="200"
    absolute
    style="background-color: rgba(255, 255, 255, 0.4)"
  >
    <v-row style="display: flex" class="justify-end">
      <v-col class="align-content-center" style="padding-left: 100px">
        <div>
          <h1 class="">LUCIA BORDONA ALONSO</h1>
        </div>
        <div>
          <h3 class="">Set Design | Model Making | Costume Design</h3>
        </div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-tabs v-model="tab" @update:model-value="handleTabChange">
          <v-tab value="home">Set Design</v-tab>
          <v-tab value="model">Modelmaking</v-tab>
          <v-tab value="set">Costume Design</v-tab>
          <v-tab value="sketches">Sketches</v-tab>
          <v-tab value="about">About me</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      tab: "home",
    };
  },
  methods: {
    handleTabChange(newValue) {
      this.$emit("tabChanged", newValue);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Quicksand-Light", sans-serif;
  font-size: 40px;
  color: #784910;
}

h3 {
  font-family: "Quicksand-Light", sans-serif;
  color: #cf8946;
}

:deep(.v-btn__content) {
  font-family: "Quicksand-Light", sans-serif;
  color: #cf8946;
}

:deep(.v-tab--selected) {
  color: #cf8946 !important;
}

:deep(.v-tab--selected) .v-btn__content {
  color: #784910 !important;
}
</style>
