/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "/src/assets/fonts.css";
import CostumeDesign from "@/views/CostumeDesign.vue";
import ModelMaking from "@/views/ModelMaking.vue";
import Home from "@/views/Home.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/costumeDesign", name: "costumeDesign", component: CostumeDesign },
    { path: "/modelMaking", name: "modelMaking", component: ModelMaking },
  ],
});

registerPlugins(app);
app.use(router);
app.mount("#app");
