<template>
  <div class="text-center py-12 space-y-6">
    <h2 class="text-3xl font-semibold">Find by Categories</h2>

    <div class="flex justify-center gap-4">
      <template v-if="loading">
        <CategoriesSkeleton />
      </template>

      <div
        v-else
        v-for="mealType in mealTypes"
        :key="mealType"
        class="border py-2 px-6 rounded-full cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
        @click="selectCategory(mealType)"
        :class="
          category === mealType
            ? 'bg-blue-900 text-white hover:bg-blue-900'
            : 'bg-white'
        "
      >
        {{ mealType }}
      </div>

      <div v-if="error" class="text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useRecipesStore } from "@/stores/recipes-store";

import CategoriesSkeleton from "../skeleton/CategoriesSkeleton.vue";
import { useFilterStore } from "@/stores/filter-store";

const recipesStore = useRecipesStore();
const filterStore = useFilterStore();

const { mealTypes, loading, error } = storeToRefs(recipesStore);
const { category } = storeToRefs(filterStore);

const selectCategory = (selectedCategory) =>
  category.value === selectedCategory
    ? filterStore.setCategory("")
    : filterStore.setCategory(selectedCategory);
</script>
