<template>
  <header class="p-5 flex justify-between items-center">
    <router-link to="/">
      <h1 class="text-2xl font-extrabold text-emerald-400">iTold</h1>
    </router-link>

    <AppMenu />
  </header>
</template>

<script setup lang="ts">
import AppMenu from "./AppMenu.vue";
</script>
