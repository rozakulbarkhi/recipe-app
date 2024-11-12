import { defineStore } from "pinia";

import { getRecipes } from "@/api/get-recipes";

import { useFilterStore } from "./filter-store";

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
  getters: {
    filteredRecipes(state) {
      const filterStore = useFilterStore();
      let filteredRecipes = state.recipes;

      if (filterStore.category) {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.mealType.includes(filterStore.category)
        );
      }

      if (filterStore.difficulty) {
        filteredRecipes = filteredRecipes.filter(
          (recipe) => recipe.difficulty === filterStore.difficulty
        );
      }

      if (filterStore.tags) {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.tags.includes(filterStore.tags)
        );
      }

      if (filterStore.cookTime) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          const time = recipe.cookTimeMinutes;

          if (filterStore.cookTime === "< 5 min") {
            return time < 5;
          } else if (filterStore.cookTime === "5-10 min") {
            return time >= 5 && time <= 10;
          } else {
            return time > 10;
          }
        });
      }

      return filteredRecipes;
    },
  },
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
