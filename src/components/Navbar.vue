<template>
  <div
    class="h-16 bg-slate-800 flex text-slate-200 text-lg font-semibold items-center w-full justify-between"
  >
    <router-link
      :to="{ name: 'home' }"
      class="home px-20 w-[50%] text-base md:text-2xl hover:text-yellow-600"
      >FOODIES</router-link
    >
    <div class="items flex text-sm md:text-lg justify-around w-[50%]">
      <router-link class="hover:text-yellow-600" :to="{ name: 'byname' }">Search</router-link>
      <router-link class="hover:text-yellow-600" :to="{ name: 'byletter' }">By Letter</router-link>
      <router-link class="hover:text-yellow-600" :to="{ name: 'incredient' }">By Incredient</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
