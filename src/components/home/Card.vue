<template>
  <div class="w-3/4 pb-20">
    <template v-if="loading">
      <CardSkeleton />
    </template>

    <div v-else class="space-y-8">
      <div
        v-for="recipe in recipes"
        :key="recipe"
        class="flex gap-2 border rounded-lg h-[320px]"
      >
        <div class="relative overflow-hidden rounded-s-lg flex-1">
          <div>
            <img
              :src="recipe.image"
              :alt="recipe.name"
              class="object-cover hover:scale-110 transition duration-300 ease-in-out h-full"
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

        <div class="flex flex-col justify-center overflow-hidden flex-1 px-6">
          <div class="space-y-4">
            <div class="space-y-2">
              <h2
                class="text-xl hover:text-blue-900 transition-colors duration-300 ease-in-out"
              >
                {{ recipe.name }}
              </h2>

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

                  <div>{{ recipe.rating }}</div>
                </div>

                <div class="text-xs text-gray-500">•</div>

                <div class="flex gap-1 items-center">
                  <Clock :size="16" />

                  <span>{{ recipe.cookTimeMinutes }} min</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="capitalize text-base">ingredients:</h3>

              <ul class="list-disc line-clamp-6">
                <li
                  v-for="ingredient in recipe.ingredients"
                  :key="ingredient"
                  class="antialiased text-base list-disc"
                >
                  • {{ ingredient }}
                </li>
              </ul>
            </div>

            <router-link
              :to="'/recipe/' + slugify(recipe.name.toLowerCase())"
              class="flex items-center gap-1 justify-end w-full text-sm hover:text-blue-900 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              <div class="capitalize">read more</div>

              <ChevronRight :size="20" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { Star, ChevronRight, Clock } from "lucide-vue-next";
import slugify from "slugify";

import { useRecipesStore } from "@/stores/recipes-store";

import CardSkeleton from "../skeleton/CardSkeleton.vue";

const store = useRecipesStore();

const { recipes, loading, error } = storeToRefs(store);
</script>
