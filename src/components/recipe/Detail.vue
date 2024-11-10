<template>
  <div class="container max-w-screen-xl mx-auto px-6 py-12 space-y-6">
    <div class="flex gap-2">
      <router-link to="/" class="text-blue-900 cursor-pointer"
        >Home</router-link
      >
      <div>/</div>
      <div>{{ recipe.name }}</div>
    </div>

    <div class="flex gap-12 h-full w-full">
      <div class="relative w-full h-full overflow-hidden rounded-lg flex-1">
        <div class="w-full h-[320px]">
          <img
            :src="recipe.image"
            :alt="recipe.name"
            class="w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out duration-300"
          />
        </div>

        <div class="absolute flex items-center top-4 left-4 gap-2 w-full">
          <div
            v-for="type in recipe.mealType"
            :key="type"
            class="text-white bg-blue-900 border border-none px-2 py-1 rounded-lg text-sm w-20 text-center"
          >
            {{ type }}
          </div>
        </div>
      </div>

      <div class="space-y-6 flex-1 h-full w-full">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">{{ recipe.name }}</h2>
          <div class="flex items-center gap-2 text-sm">
            <div
              class="border border-none px-4 py-.5 rounded-full text-white"
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
            <div class="text-xs text-gray-500">•</div>
            <div class="flex gap-1">
              <Star
                :size="20"
                fill="gold"
                stroke-width="none"
                class="text-yellow-300"
              />
              <div class="flex">
                {{ recipe.rating }} ({{ recipe.reviewCount }})
              </div>
            </div>
            <div class="text-xs text-gray-500">•</div>
            <div>{{ recipe.cuisine }}</div>
          </div>
        </div>

        <div class="text-sm flex gap-2">
          <div
            class="flex justify-center items-center gap-1 border w-fit px-4 h-8 rounded-full bg-blue-900/10 text-blue-900"
          >
            <Clock :size="16" />
            <span>{{ recipe.prepTimeMinutes }} min prep</span>
          </div>

          <div
            class="flex justify-center items-center gap-1 border w-fit px-4 h-8 rounded-full bg-blue-900/10 text-blue-900"
          >
            <Clock :size="16" />
            <span>{{ recipe.cookTimeMinutes }} min cook</span>
          </div>

          <div
            class="flex justify-center items-center gap-1 w-fit px-4 h-8 rounded-full bg-blue-900/10 text-blue-900"
          >
            <Anvil :size="16" />
            <span>{{ recipe.caloriesPerServing }} Cal</span>
          </div>

          <div
            class="flex justify-center items-center gap-1 w-fit px-4 h-8 rounded-full bg-blue-900/10 text-blue-900"
          >
            <FlameKindling :size="16" />
            <span>{{ recipe.servings }} Servings</span>
          </div>
        </div>

        <div class="flex gap-2 w-full h-full">
          <div class="space-y-2 w-1/2">
            <h3 class="capitalize">ingredients:</h3>

            <ul class="list-disc list-inside space-y-1 antialiased">
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>

          <div class="space-y-2 w-1/2">
            <h3 class="capitalize">instructions:</h3>

            <ol class="list-decimal list-inside space-y-1 antialiased">
              <li v-for="instruction in recipe.instructions" :key="instruction">
                {{ instruction }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <Recommendation />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { Anvil, Clock, FlameKindling, Star } from "lucide-vue-next";

import Recommendation from "./Recommendation.vue";

import { useRecipeStore } from "@/stores/recipe-store";

const store = useRecipeStore();

const { recipe, loading, error } = storeToRefs(store);
</script>
