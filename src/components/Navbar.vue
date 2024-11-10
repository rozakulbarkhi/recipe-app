<template>
  <nav
    class="fixed w-full p-6 z-20 transition duration-300 ease-in-out"
    :class="isScrolled ? 'bg-white border-b' : 'bg-transparent'"
  >
    <div class="container mx-auto flex justify-between items-center">
      <Logo />

      <div
        class="flex gap-6 text-xl"
        :class="isScrolled || $route.path !== '/' ? 'text-black' : 'text-white'"
      >
        <div v-for="menu in menus" :key="menu.label">
          <router-link
            :to="menu.path"
            class="cursor-pointer hover:text-blue-900 transform transition-colors ease-in-out duration-300"
            :active-class="'text-blue-900'"
          >
            {{ menu.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { menus } from "../data/menus.js";

import Logo from "./Logo.vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
