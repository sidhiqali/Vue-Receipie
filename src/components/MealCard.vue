<template>
  <div
    class="meal-card main max-h-[370px] w-72 bg-slate-100 shadow-2xl rounded-sm"
    :class="meal.strInstructions ? 'h-[370px]' : 'h-[300px]'"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <div
        class="img w-full rounded-md p-1"
        :class="meal.strInstructions ? 'h-[50%]' : 'h-[70%]'"
      >
        <img
          class="h-full w-full rounded-sm"
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
        />
      </div>
    </router-link>
    <div
      class="bottom flex flex-col justify-between"
      :class="meal.strInstructions ? 'h-[50%]' : 'h-[30%]'"
    >
      <div class="title p-2 text-yellow-700 text-center text-lg font-semibold">
        {{ truncateWords(meal.strMeal, 2) }}
      </div>
      <div
        v-if="meal.strInstructions"
        class="desc text-sm px-3 py-1"
      >
        {{ truncateWords(meal.strInstructions, 20) }}
      </div>
      <a
        :href="meal.strYoutube"
        class="border text-center mx-3 px-3 py-1 my-2 text-base font-semibold bg-yellow-700 rounded-md text-slate-200"
        target="_blank"
      >
        Youtube
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});

// Define a local filter as a computed property
const truncateWords = computed(() => (value, words) => {
  if (value) {
    const wordsArray = value.split(" ");
    if (wordsArray.length > words) {
      return wordsArray.slice(0, words).join(" ");
    } else {
      return value;
    }
  }
  return "";
});
</script>
