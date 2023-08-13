<template>
  <main :class="{ dark: darkMode }">
    <div class="dark:bg-neutral-800">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useAppStore from "./store/AppStore.ts";

const AppStore = useAppStore();
const darkMode = computed(() => AppStore.darkMode);
</script>
