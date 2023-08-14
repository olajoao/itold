<template>
  <header
    class="bg-white dark:bg-neutral-800 sticky top-0 py-4 px-4 md:px-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-700/50"
  >
    <router-link class="flex items-center" to="/">
      <div class="w-8">
        <Logo class="w-8 h-8 text-neutral-800 transform logo" />
      </div>
      <h1 class="text-3xl font-extrabold text-emerald-400">ticriticam</h1>
    </router-link>

    <AppMenu />
  </header>
</template>

<script setup lang="ts">
import AppMenu from "@components/AppMenu.vue";
import Logo from "@components/Logo.vue";
</script>
<style scoped>
.logo {
  transform: rotateY(180deg);
}
</style>
