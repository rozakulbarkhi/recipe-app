<template>
  <Hero />
  <Detail />
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useRecipeStore } from "@/stores/recipe-store";

import Hero from "@/components/recipe/Hero.vue";
import Detail from "@/components/recipe/Detail.vue";

const route = useRoute();
const { slug } = route.params;

const store = useRecipeStore();
const { fetchDataBySlug } = store;

onMounted(() => fetchDataBySlug(slug));
</script>
