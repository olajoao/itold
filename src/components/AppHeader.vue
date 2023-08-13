<template>
  <header
    class="py-4 px-4 md:px-6 flex justify-between items-center border-b border-gray-100"
  >
    <router-link to="/">
      <h1 class="text-3xl font-extrabold text-emerald-400">iTold</h1>
    </router-link>

    <AppMenu />
  </header>
</template>

<script setup lang="ts">
import AppMenu from "./AppMenu.vue";
</script>
