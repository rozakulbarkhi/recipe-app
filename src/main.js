import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "./index.css";

import App from "./App.vue";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Recipe from "./pages/Recipe.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  { path: "/about", name: "about", component: About },
  {
    path: "/recipe/:slug",
    name: "recipe",
    sensitive: true,
    component: Recipe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router).use(pinia).mount("#app");
