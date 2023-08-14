<template>
  <router-link class="max-w-[200px]" :to="`/movie/${movie?.id}`">
    <img
      width="200"
      height="250"
      class="max-w-full h-auto"
      :src="`${imageBaseURL}${movie?.poster_path}`"
      :alt="movie?.overview"
    />
    <div class="py-3 px-1">
      <h2
        class="text-gray-700 dark:text-neutral-300 font-semibold truncate text-sm"
      >
        {{ movie?.original_title }}
      </h2>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { MovieProps } from "@store/MovieStore.ts";

defineProps({
  movie: Object as PropType<MovieProps>,
});

const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
</script>
