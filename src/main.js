import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import "./index.css";

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

const app = createApp(App);

app.use(router).mount("#app");
