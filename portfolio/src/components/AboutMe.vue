<template>
  <div
    :style="
      $vuetify.display.width > 1600
        ? 'width: 1600px; margin-left: -120px; min-height: 700px'
        : 'margin-top: 30px; min-height: 600px'
    "
  >
    <v-row
      style="background-color: white; min-height: 900px"
      no-gutters
      class="pb-0"
    >
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
              I´m a 27-year old model maker and environment designer currently
              based in Barcelona, Spain.
            </div>
            <br />
            <div class="text">
              I have worked in a series of theatre and short film productions
              and am currently part of the workshop responsible for creating,
              among other projects, the scale models for the Sagrada Familia
              museum.
            </div>
            <br />
            <div class="text">
              I am knowledgeable in painting (traditional as well as digital),
              3D programs and productions (from 3D modelling and texturing, to
              3D printing workflow and knowledge of the 3D production pipeline
              for film and games).
            </div>
            <br />
            <div class="text">
              The combination of a degree in animation and VFX and a master in
              Set Design for film, theater and television has made me very
              versatile and a fast learner, managing both 3D software and
              real-life construction materials. I have experience jumping from
              3D mediums to traditional workflows for model making and do so
              very comfortably, always willing to learn new techniques and
              explore faster and more efficient ways of production within
              projects.
            </div>
            <br />
            <div class="text">
              I thrive when I work as part of a team, always trying to add to
              the group and working hard towards creating a supportive and open
              working environment.
            </div>
            <span class="text">
              <a
                href="mailto:lbordona.alonso@gmail.com"
                style="color: #784910 !important"
              >
                lbordona.alonso@gmail.com
              </a>
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
          <a href="https://www.instagram.com/polytorpe/" target="_blank">
            <v-icon class="mt-2 ml-5" size="40" color="#784910">
              mdi-instagram
            </v-icon>
          </a>
          <a href="https://luciabordona.artstation.com/" target="_blank">
            <v-icon class="mt-2 ml-5" size="40" color="#784910">
              mdi-artstation
            </v-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/lucia-bordona-alonso/"
            target="_blank"
          >
            <v-icon class="mt-2 ml-5" size="40" color="#784910">
              mdi-linkedin
            </v-icon>
          </a>
        </div>
      </v-col>
      <v-col class="" cols="" v-if="$vuetify.display.mdAndUp">
        <v-img
          src="../assets/RESUME/lucia_profile_new_cut.jpg"
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
      <v-img src="../assets/RESUME/lucia_profile_new_cut.jpg" width="100%" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

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
