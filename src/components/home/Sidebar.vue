<template>
  <div class="w-1/4">
    <div class="w-full sticky top-28 z-20 space-y-8">
      <div class="bg-white space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Difficulty</h3>

        <template v-if="loading">
          <DifficultySkeleton />
        </template>

        <div v-else class="flex flex-wrap gap-x-2 gap-y-4 items-center">
          <div
            v-for="item in difficulty"
            :key="item"
            class="border rounded-full w-24 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
            :class="
              filterDifficulty === item
                ? 'bg-blue-900 text-white hover:bg-blue-900'
                : ''
            "
            @click="handleDifficulty(item)"
          >
            <div>
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Tags</h3>

        <div>
          <select
            name="tags"
            id="tags"
            class="py-1 px-2 bg-white cursor-pointer w-full border rounded-lg h-8 hover:bg-gray-100 transition duration-300 ease-in-out"
            @change="handleTags($event.target.value)"
          >
            <option value="">All tags</option>
            <option v-for="tag in tags" :key="tag" :value="tag">
              {{ tag }}
            </option>
          </select>
        </div>
      </div>

      <div class="bg-white space-y-4 border p-6 rounded-lg">
        <h3 class="text-xl">Filter by Cook Time</h3>

        <template v-if="loading">
          <CookTimeSkeleton />
        </template>

        <div v-else class="flex flex-wrap gap-x-2 gap-y-4 items-center">
          <div
            v-for="time in cookTime"
            :key="time"
            class="border rounded-full w-28 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
            :class="
              filterCookTime === time
                ? 'bg-blue-900 text-white hover:bg-blue-900'
                : ''
            "
            @click="handleCookTime(time)"
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
import { onBeforeRouteLeave } from "vue-router";

import CookTimeSkeleton from "../skeleton/CookTimeSkeleton.vue";
import DifficultySkeleton from "../skeleton/DifficultySkeleton.vue";

import { useRecipesStore } from "@/stores/recipes-store";
import { useFilterStore } from "@/stores/filter-store";

const recipesStore = useRecipesStore();
const filterStore = useFilterStore();

const { tags, difficulty, cookTime, loading, error } =
  storeToRefs(recipesStore);
const {
  difficulty: filterDifficulty,
  tags: filterTags,
  cookTime: filterCookTime,
} = storeToRefs(filterStore);

const handleDifficulty = (selectedDifficulty) =>
  filterDifficulty.value === selectedDifficulty
    ? filterStore.setDifficulty("")
    : filterStore.setDifficulty(selectedDifficulty);

const handleTags = (selectedTags) =>
  filterTags.value === selectedTags
    ? filterStore.setTags("")
    : filterStore.setTags(selectedTags);

const handleCookTime = (selectedCookTime) =>
  filterCookTime.value === selectedCookTime
    ? filterStore.setCookTime("")
    : filterStore.setCookTime(selectedCookTime);

onBeforeRouteLeave((to, from) => filterStore.$reset());
</script>
