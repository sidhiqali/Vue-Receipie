<template>
  <div class="main">
    <div class="mx-10">
      <div class="text-4xl text-center py-3 font-bold text-yellow-700">
        Search Your Dish
      </div>
      <div class="w-full">
        <input
          type="text"
          placeholder="Search Here..."
          class="w-full text-lg px-4 my-6 border-2 border-slate-400 focus:border-slate-300 h-12 rounded-md"
        />
      </div>
    </div>
    <Meals />
  </div>
</template>

<script>
import Meals from '../components/Meals.vue';
export default {
  name: 'Search',
  components: { Meals },
};
</script>

<style></style>
