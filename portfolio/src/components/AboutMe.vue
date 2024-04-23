<template>
  <div
    :style="
      $vuetify.display.width > 1600
        ? 'width: 1600px; margin-left: -120px; height: 700px'
        : 'margin-top: 30px; height: 1100px'
    "
  >
    <v-row style="background-color: white; height: 700px" no-gutters class="">
      <v-col class="d-flex justify-center" lg="7" md="5">
        <div
          class="textDiv"
          :style="
            $vuetify.display.mdAndUp
              ? 'margin-left: 70px; margin-top: 50px;'
              : 'margin-left: 20px; margin-top: 0px;'
          "
        >
          <div><h1>About Me</h1></div>
          <div><h3>My name is Lucia Bordona Alonso</h3></div>
          <br />
          <div class="e1 justify-center">
            <div class="text">
              I am a 24-year old Visual Development artist and Set Designer
              based in Rome, Italy.
            </div>
            <br />
            <div class="text">
              I´m a dedicated artist, adaptable, resilient and full of passion
              and enthusiasm for my work.
            </div>
            <br />
            <div class="text">
              The combination of a degree in animation and VFX and a master in
              Set Design for film, theater and television has made me very
              versatile and a fast learner, managing both 3D software and
              real-life construction materials.
            </div>
            <br />
            <div class="text">
              I thrive when I work as part of a team, always trying to add to
              the group and working hard towards creating a supportive and open
              working environment.
            </div>
            <br />
            <span class="text" style="color: #784910 !important">
              lbordona-alonso@gmail.com
            </span>
          </div>
          <br />
          <v-btn
            class="mt-2 bg-black text-white btn"
            rounded="0"
            href="LuciaBordona_Curriculum.pdf"
            target="_blank"
          >
            Resume
          </v-btn>
        </div>
      </v-col>
      <v-col class="" cols="" v-if="$vuetify.display.mdAndUp">
        <v-img
          src="../assets/RESUME/about_smal_compress.jpg"
          style="margin-left: 69px"
        />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      v-if="!$vuetify.display.mdAndUp"
      style="background-color: white"
      class="d-flex"
    >
      <v-img src="../assets/RESUME/about_smal_compress.jpg" width="100%" />
    </v-row>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-family: Quicksand-Light, sans-serif;
  color: #784910;
  font-size: 40px;
}
h3 {
  font-family: Quicksand-Regular, sans-serif;
  color: #784910;
  font-weight: 500;
}
.e1 {
  font-family: Quicksand-Regular, sans-serif;
  color: #cf8946;
}

.textDiv {
  max-width: 365px;
  margin-top: 50px;
}

.btn {
  font-family: Helvetica-Light, sans-serif;
  font-size: 12px;
  width: 140px;
}

.text {
  font-size: 14px !important;
}
</style>
