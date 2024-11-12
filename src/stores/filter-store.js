import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", {
  state: () => ({
    category: "",
    difficulty: "",
    tags: "",
    cookTime: "",
  }),
  actions: {
    setCategory(state) {
      this.category = state;
    },
    setDifficulty(state) {
      this.difficulty = state;
    },
    setTags(state) {
      this.tags = state;
    },
    setCookTime(state) {
      this.cookTime = state;
    },
  },
});
