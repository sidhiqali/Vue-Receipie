<template>
  <div class="main">
    <div class="random py-8 px-6 text-center text-4xl text-yellow-700 font-bold">
      Random Meals
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { defineComponent, onMounted, reactive } from "vue";
import Meals from "../components/Meals.vue";
import sentRequest from "../utils/sentRequest.js";

const meals = reactive([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    const { data } = await sentRequest("/random.php");
    meals.push(data.meals[0]);
  }
});
</script>

<style></style>
