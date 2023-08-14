<template>
  <header
    class="bg-white dark:bg-neutral-800 sticky top-0 py-4 px-4 md:px-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50"
  >
    <router-link to="/">
      <h1 class="text-3xl font-extrabold text-emerald-400">iTold</h1>
    </router-link>

    <AppMenu />
  </header>
</template>

<script setup lang="ts">
import AppMenu from "@components/AppMenu.vue";
</script>
