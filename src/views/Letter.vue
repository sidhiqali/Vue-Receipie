<template>
  <div class="main">
    <div class="top">
      <div class="head text-4xl text-center font-semibold py-5 text-yellow-700">
        Select Your Dish by Letter
      </div>
      <div class="letters flex gap-1 items-center justify-center pb-7  pt-3">
        <router-link
          v-for="letter in letters"
          :to="{ name: 'byletter', params: { letter } }"
          :key="letter"
          class="let px-3 rounded-sm text-2xl border-slate-300 border text-slate-500 cursor-pointer hover:bg-yellow-600 hover:text-white font-semibold"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
    <div class="text-lg font-semibold p-2 text-slate-500">
      Result for <span class="text-yellow-700">{{ route.params.letter }} </span>
    </div>
    <div>
      <Meals :meals="meals" />
    </div>
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

watch(route, () => {
  myStore.searchMealsByLetter(route.params.letter);
  console.log(route.params.letter);
});
onMounted(() => {
  route.params.letter = "A";
  myStore.searchMealsByLetter(route.params.letter);
});
  }
}
</script>

