<template>
  <Hero />
  <Categories />
  <List />
</template>

<script setup>
import Hero from "@/components/home/Hero.vue";
import Categories from "@/components/home/Categories.vue";
import List from "@/components/home/List.vue";

import { onMounted } from "vue";
import { useRecipesStore } from "@/stores/recipes-store";

const store = useRecipesStore();
const { fetchData } = store;

onMounted(() => fetchData());
</script>
