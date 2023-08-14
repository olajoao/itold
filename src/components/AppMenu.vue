<template>
  <nav class="hidden sm:flex items-center gap-3 md:gap-14">
    <router-link class="menu__item" to="/">
      <div class="absolute -bottom-1 flex items-center gap-1 w-full">
        <span
          class="border__one animated__border w-full h-0 border-emerald-300 dark:border-emerald-800 border rounded-2xl"
        ></span>
        <span
          class="border__two animated__border w-full h-0 border-emerald-50 dark:border-gray-700 border rounded-2xl left-5"
        ></span>
        <span
          class="border__three animated__border w-full h-0 border-emerald-300 dark:border-emerald-800 border rounded-2xl left-10"
        ></span>
      </div>
      <span class="dark:text-neutral-200"> Filmes </span>
    </router-link>
    <router-link class="menu__item" to="/lorem">
      <span class="dark:text-neutral-200"> Jogos </span>
    </router-link>
    <router-link class="menu__item" to="/lorem">
      <span class="dark:text-neutral-200"> Empresas </span>
    </router-link>
  </nav>

  <div class="flex gap-x-3 items-center">
    <button
      @click="toggleDarkMode"
      class="p-1 rounded-md transition-all duration-100 hover:bg-emerald-50 dark:hover:bg-emerald-700/10 hover:ring-1 hover:ring-emerald-200 dark:hover:ring-emerald-700/50"
    >
      <Sun v-if="darkMode" class="w-5 h-5 text-gray-700 dark:text-gray-100" />
      <Moon v-else class="w-5 h-5 text-gray-700 dark:text-gray-100" />
    </button>
    <button class="text-gray-700 dark:text-neutral-300 sm:hidden">
      <Menu />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useAppStore from "@store/AppStore.ts";
import { Sun, Moon, Menu } from "lucide-vue-next";

const AppStore = useAppStore();
const toggleDarkMode = () => AppStore.toggleDarkMode();

const darkMode = computed(() => AppStore.darkMode);
</script>

<style scoped>
.menu__item {
  @apply text-gray-600 relative;
}
.router-link-active {
  @apply text-gray-800 font-black animated__border;
}

.animated__border {
  transition: all 1s ease;
}

.border__one {
  animation: borderOne 1s;
}

.border__two {
  animation: borderOne 2s;
}
.border__three {
  animation: borderOne 3s;
}

@keyframes borderOne {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
