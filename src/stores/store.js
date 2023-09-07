// store.js
import { defineStore } from "pinia";
import sentRequest from "../utils/sentRequest";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: null,
  }),
  actions: {
    async searchMeals(keyword) {
      const { data } = await sentRequest.get(`search.php?s=${keyword}`);
      this.searchedMeals = data.meals;
    },
    async searchMealsByLetter(letter) {
      const { data } = await sentRequest.get(`search.php?f=${letter}`);
      this.mealsByLetter = data.meals;
    },
    async searchMealsByIngredient(ing) {
      const { data } = await sentRequest.get(`filter.php?i=${ing}`);
      this.mealsByIngredient = data.meals;
    },
  },
});
