<template>
  <div class="main">
    <div class="top">
      <div class="head text-4xl text-center font-semibold py-5 text-yellow-700">
        Select Your Dish by Letter
      </div>
      <div class="letters flex items-center justify-center pb-7 pt-3 gap-1">
        <div v-for="letter in letters" :key="letter" class="let px-3 rounded-sm text-2xl border-gray-300 border-2 text-yellow-700 cursor-pointer hover:bg-yellow-600 hover:text-white font-semibold">
          {{ letter.toUpperCase() }}
        </div>
      </div>
    </div>
    <Meals />
  </div>
</template>

<script>
import Meals from '../components/Meals.vue';
export default {
  name: 'byLetter',
  components: { Meals },
  setup() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('');
    console.log(letters);

    return { letters };
  },
};
</script>

<style></style>
