import { defineStore } from "pinia";

import { getRecipes } from "@/api/get-recipes";

export const useRecipesStore = defineStore("recipes", {
  state: () => ({
    loading: false,
    error: null,
    recipes: [],
    mealTypes: [],
    tags: [],
    difficulty: [],
    cookTime: ["< 5 min", "5-10 min", "> 10 min"],
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const res = await getRecipes();

        const data = res?.recipes ?? [];

        this.recipes = data;
        this.mealTypes = [
          ...new Set(data?.flatMap((recipe) => recipe.mealType)),
        ];
        this.tags = [...new Set(data?.flatMap((recipe) => recipe.tags))];
        this.difficulty = [
          ...new Set(data?.flatMap((recipe) => recipe.difficulty)),
        ];
      } catch (err) {
        this.error = err.message || "Failed to load data. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});
