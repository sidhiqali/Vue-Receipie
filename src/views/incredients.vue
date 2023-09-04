<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl text-center font-bold mb-4 text-yellow-700">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 h-12 px-3 my-3 bg-white border-gray-200  mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 text-center gap-3 text-slate-500">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 border shadow-lg"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useMyStore } from "../stores/store";
import sentRequest from "../utils/sentRequest";

const myStore = useMyStore();

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  myStore.ingredient=ingredient;
  router.push({
  name: "byIngredient",
  params: { ingredient: ingredient.strIngredient },
});

}

onMounted(() => {
  sentRequest.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
