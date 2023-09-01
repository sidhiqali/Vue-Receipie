<template>
  <div
    class="h-16 bg-slate-800 flex font-semibold items-center w-full justify-between"
  >
    <router-link
      :to="{ name: 'home' }"
      class="home px-20 w-[50%]"
      >FOODIES</router-link
    >
    <div class="items flex justify-around w-[50%]">
      <router-link :to="{ name: 'byname' }">Search</router-link>
      <router-link :to="{ name: 'byletter' }">By Letter</router-link>
      <router-link :to="{ name: 'incredient' }">By Incredient</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
