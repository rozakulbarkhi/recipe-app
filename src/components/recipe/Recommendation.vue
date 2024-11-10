<template>
  <div class="py-12 space-y-8">
    <h2 class="text-2xl font-semibold">
      Specially Recommended Just for You 😅
    </h2>

    <div class="grid grid-cols-4 gap-6 w-full">
      <div
        class="w-full h-[280px] border rounded-lg cursor-pointer"
        v-for="recipe in recommendationRecipes"
        :key="recipe"
      >
        <img
          :src="recipe.image"
          :alt="recipe.name"
          class="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import slugify from "slugify";

import { useRecipesStore } from "@/stores/recipes-store";
import { useRoute } from "vue-router";

const route = useRoute();
const { slug } = route.params;

const store = useRecipesStore();
const { recipes, loading, error } = storeToRefs(store);

const recommendationRecipes = recipes.value
  .filter((recipe) => slugify(recipe.name) !== slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
</script>
