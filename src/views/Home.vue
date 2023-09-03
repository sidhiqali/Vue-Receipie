<template>
  <div class="main">
    <div class="random py-5 text-4xl text-yellow-700 font-bold">Random Meals</div>
    <Meals />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Meals from "../components/Meals.vue";

export default defineComponent({
  components: {
    Meals,
  },
});
</script>

<style></style>
