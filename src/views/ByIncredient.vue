<template>
  <div class="main">
    <div class="text-center text-3xl p-6 font-semibold text-slate-600 ">
      Meals with <span class="name px-2 text-yellow-700"> {{ ingredient }}</span>
    </div>
    <div class="meals">
      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { useRoute } from "vue-router";
import { useMyStore } from "../stores/store";
import { computed, onMounted } from "vue";
const route = useRoute();
const myStore = useMyStore();

const ingredient = route.params.ingredient;
const meals = computed(() => myStore.mealsByIngredient);
console.log(meals)

onMounted(() => {
  myStore.searchMealsByIngredient(ingredient);
  console.log("mounted");
});
</script>

<style></style>
