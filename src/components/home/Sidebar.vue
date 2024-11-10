<template>
  <div class="w-1/4">
    <div class="w-full sticky top-28 z-20 space-y-8">
      <div class="space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Difficulty</h3>

        <template v-if="loading">
          <DifficultySkeleton />
        </template>

        <div v-else class="flex flex-wrap gap-x-2 gap-y-4 items-center">
          <div
            v-for="item in difficulty"
            :key="item"
            class="border rounded-full w-20 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <div>
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Tags</h3>

        <div>
          <select name="tags" id="tags" class="w-full border p-2 rounded-lg">
            <option selected disabled>Select tags</option>
            <option v-for="tag in tags" :key="tag" :value="tag">
              {{ tag }}
            </option>
          </select>
        </div>
      </div>

      <div class="space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Cook Time</h3>

        <template v-if="loading">
          <CookTimeSkeleton />
        </template>

        <div v-else class="flex flex-wrap gap-x-2 gap-y-4 items-center">
          <div
            v-for="time in cookTime"
            :key="time"
            class="border rounded-full w-24 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <div>{{ time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useRecipesStore } from "@/stores/recipes-store";
import CookTimeSkeleton from "../skeleton/CookTimeSkeleton.vue";
import DifficultySkeleton from "../skeleton/DifficultySkeleton.vue";

const store = useRecipesStore();

const { tags, difficulty, cookTime, loading, error } = storeToRefs(store);
</script>
