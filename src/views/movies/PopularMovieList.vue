<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10">
    <HeroCard v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { MovieStore } from "@store/MovieStore";
import HeroCard from "@components/home/HeroCard.vue";

const useMovieStore = MovieStore();

const popularMovies = computed(() => useMovieStore.popularMovies.slice(0, 8));

onMounted(async () => await useMovieStore.getPopularMovies());
</script>
