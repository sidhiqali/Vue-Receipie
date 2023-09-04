<template>
  <div class="main">
    <div class="mx-10">
      <div class="text-4xl text-center py-3 font-bold text-yellow-700">
        Search Your Dish
      </div>
      <div class="w-full">
        <input
          v-model="keyword"
          @change="searchMeal"
          type="text"
          placeholder="Search Here..."
          class="w-full text-lg px-4 my-6 border-2 border-slate-400 focus:border-slate-300 h-12 rounded-md"
        />
      </div>
    </div>
    <div>
      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import { useMyStore } from "../stores/store";
const myStore = useMyStore();
const keyword = ref("Fish");

const meals = computed(() => myStore.searchedMeals);

console.log(meals);

const searchMeal = () => {
  if (keyword.value) {
    myStore.searchMeals(keyword.value);
  } else {
    myStore.searchedMeals = [];
  }
};
onMounted(() => {
  searchMeal();
});
</script>

<style></style>
