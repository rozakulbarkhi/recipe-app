<template>
  <template v-if="loading">
    <div class="h-[320px] animate-pulse bg-gray-200" />
  </template>

  <div v-else class="w-full h-[320px]">
    <img
      :src="image"
      alt="hero image"
      class="object-cover brightness-50 w-full h-full"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useRecipeStore } from "@/stores/recipe-store";

const store = useRecipeStore();

const { image, loading, error } = storeToRefs(store);
</script>
