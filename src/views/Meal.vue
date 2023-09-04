<template>
  <div class="max-w-[800px] flex flex-col mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-yellow-700">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-[100%] h-[500px]"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template
            v-for="(el, ind) of new Array(20)"
            :key="ind"
          >
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template
            v-for="(el, ind) of new Array(20)"
            :key="ind"
          >
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex  items-center">
        <a
          :href="meal.strYoutube"
          class="border text-center h-12 w-28 mx-3 px-3 py-3 my-2 text-base font-semibold bg-yellow-700 rounded-md text-slate-200"
          target="_blank"
        >
          Youtube
        </a>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3  px-3 py-3 h-12  rounded border-2 border-slate-200 text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import sentRequest from "../utils/sentRequest";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  sentRequest.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
