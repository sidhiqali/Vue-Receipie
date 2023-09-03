<template>
  <div class="cards flex flex-wrap gap-4">
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
  </div>
</template>

<script>
import MealCard from "./MealCard.vue";

export default {
  name: 'Meals',
  components: {
    MealCard,
  },
};
</script>

<style></style>
