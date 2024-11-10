import { getRecipes } from "@/api/get-recipes";
import { defineStore } from "pinia";

export const useRecipesStore = defineStore("recipes", {
  state: () => ({
    loading: false,
    error: null,
    recipes: [],
    mealTypes: [],
    tags: [],
    difficulty: [],
    cookTime: [],
  }),
  getters: {
    setLoading(state) {
      return state.loading;
    },
    setError(state) {
      return state.error;
    },
    setRecipes(state) {
      return state.recipes;
    },
    setMealType(state) {
      return state.mealTypes;
    },
    setTags(state) {
      return state.tags;
    },
    setDifficulty(state) {
      return state.difficulty;
    },
    setCookTime(state) {
      return state.cookTime;
    },
  },
  actions: {
    async fetchData() {
      this.loading = true;

      try {
        const res = await getRecipes();

        const data = res?.recipes;

        this.recipes = data;
        this.mealTypes = [
          ...new Set(data?.flatMap((recipe) => recipe.mealType)),
        ];
        this.tags = [...new Set(data?.flatMap((recipe) => recipe.tags))];
        this.difficulty = [
          ...new Set(data?.flatMap((recipe) => recipe.difficulty)),
        ];
        this.cookTime = ["< 5 min", "5-10 min", "> 10 min"];
      } catch (err) {
        this.error = "Failed to load data. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
});
