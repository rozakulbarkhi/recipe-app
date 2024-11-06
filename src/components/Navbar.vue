<template>
  <nav class="bg-transparent fixed w-full p-6 z-20">
    <div class="container mx-auto flex justify-between items-center">
      <Logo />

      <div class="flex gap-6 text-xl text-white">
        <div v-for="menu in menus">
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
import { menus } from "../data/menus.js";

import Logo from "./Logo.vue";
</script>
