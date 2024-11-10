import { defineStore } from "pinia";
import slugify from "slugify";

import { getRecipes } from "@/api/get-recipes";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    loading: false,
    error: null,
    image: "",
    recipe: {},
  }),
  actions: {
    async fetchDataBySlug(slug) {
      this.loading = true;
      this.error = null;

      try {
        const res = await getRecipes();

        const data = res.recipes.find(
          (recipe) => slugify(recipe.name.toLowerCase()) === slug
        );

        this.image = data.image;
        this.recipe = data;
      } catch (err) {
        this.error = err.message || "Failed to load data. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
});
