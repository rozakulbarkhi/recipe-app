import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import "./index.css";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);

app.use(router).use(pinia).mount("#app");
