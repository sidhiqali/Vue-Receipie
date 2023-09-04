<template>
  <div
    class="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center"
  >
    <MealCard
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    />
  </div>
  <div
    v-if="!meals"
    class="text-3xl font-semibold text-center mt-28 text-slate-500"
  >
    No Meals Found !!!
  </div>
</template>

<script setup>
import MealCard from "./MealCard.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>

<style></style>
