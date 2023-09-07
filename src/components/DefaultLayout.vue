<template>
    <navbar />
    <main>
      <div class="mx-10 md:mx-20">
        <router-view />
      </div>
    </main>
  </template>
  
  <script setup>
  import Navbar from "../components/Navbar.vue";
  </script>
  