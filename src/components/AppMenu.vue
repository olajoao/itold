<template>
  <nav class="flex items-center gap-14">
    <router-link class="menu__item" to="/">
      <div class="absolute -bottom-1 flex items-center gap-1 w-full">
        <span
          class="border__one animated__border w-full h-0 border-emerald-300 border rounded-2xl"
        ></span>
        <span
          class="border__two animated__border w-full h-0 border-emerald-50 border rounded-2xl left-5"
        ></span>
        <span
          class="border__three animated__border w-full h-0 border-emerald-300 border rounded-2xl left-10"
        ></span>
      </div>
      <span> Filmes e Séries </span>
    </router-link>
    <router-link class="menu__item" to="/lorem">
      <span> Jogos </span>
    </router-link>
    <router-link class="menu__item" to="/lorem">
      <span> Empresas </span>
    </router-link>
  </nav>
</template>

<script setup lang="ts"></script>

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
