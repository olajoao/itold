<template>
  <main :class="{ dark: darkMode }">
    <AppHeader />
    <div class="bg-white dark:bg-neutral-800">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useAppStore from "@store/AppStore.ts";
import AppHeader from "@components/AppHeader.vue";

const AppStore = useAppStore();
const darkMode = computed(() => AppStore.darkMode);
</script>
