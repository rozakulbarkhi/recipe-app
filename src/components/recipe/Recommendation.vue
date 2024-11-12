<template>
  <div class="py-12 space-y-8">
    <h2 class="text-2xl font-semibold">
      Specially Recommended Just for You 😅
    </h2>

    <div class="grid grid-cols-4 gap-6 w-full">
      <router-link
        class="relative w-full h-[280px] border rounded-lg cursor-pointer"
        v-for="recipe in recommendationRecipes"
        :key="recipe"
        :to="slugify(recipe.name.toLowerCase())"
      >
        <img
          :src="recipe.image"
          :alt="recipe.name"
          class="rounded-lg object-cover w-full h-full"
          :class="
            isHover === recipe &&
            'brightness-50 transition ease-in-out duration-300'
          "
          @mouseenter="isHover = recipe"
          @mouseleave="isHover = null"
        />

        <div
          name="fade"
          v-show="isHover === recipe"
          class="transition ease-in-out duration-300"
        >
          <h3
            class="text-lg font-medium absolute left-1/2 bottom-4 transform -translate-x-1/2 flex text-white hover:text-blue-900 transition-colors ease-in-out duration-300 text-center"
          >
            {{ recipe.name }}
          </h3>

          <div
            class="absolute top-4 left-4 border border-none w-20 h-6 rounded-full text-white text-center text-sm flex justify-center items-center"
            :class="
              recipe.difficulty === 'Easy'
                ? 'bg-green-500 hover:bg-green-500/85'
                : recipe.difficulty === 'Medium'
                ? 'bg-yellow-500 hover:bg-yellow-500/85'
                : 'bg-red-500 hover:bg-red-500/85'
            "
          >
            {{ recipe.difficulty }}
          </div>

          <div
            class="absolute top-4 right-4 flex justify-center items-center gap-1 border w-20 h-6 rounded-full bg-blue-900/50 hover:bg-blue-900/90 text-sm text-center text-white/90"
          >
            <Clock :size="16" />
            <span>{{ recipe.prepTimeMinutes }} min</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import slugify from "slugify";
import { Clock } from "lucide-vue-next";

import { useRecipesStore } from "@/stores/recipes-store";

const route = useRoute();
const { slug } = route.params;

const store = useRecipesStore();
const { recipes, loading, error } = storeToRefs(store);

const isHover = ref(null);

const recommendationRecipes = computed(() => {
  const currentSlug = route.params.slug;

  return recipes.value
    .filter((recipe) => slugify(recipe.name.toLowerCase()) !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
});
</script>
