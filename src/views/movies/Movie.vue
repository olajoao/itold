<template>
  <section class="py-10 container mx-auto">
    <router-link
      to="/"
      class="flex items-center mb-5 gap-x-5 dark:text-gray-200"
    >
      <MoveLeft class="w-5 h-5" />
      <span class="">Back</span>
    </router-link>
    <div class="flex">
      <div>
        <img
          class="object-contain h-full"
          :src="movieImg"
          :alt="movie?.overview"
          loading="lazy"
          width="400"
          height="600"
        />
      </div>
      <div class="px-8 flex-1">
        <h1 class="text-3xl text-neutral-800 dark:text-gray-100">
          {{ movie?.original_title }}
        </h1>
        <p class="text-neutral-700 dark:text-gray-200 my-5">
          {{ movie?.overview }}
        </p>
      </div>
    </div>

    <MovieReview />
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { MoveLeft } from "lucide-vue-next";
import { MovieStore } from "@store/MovieStore.ts";
import MovieReview from "./MoviewReview.vue";

const useMovieStore = MovieStore();
const route = useRoute();

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

const movie = computed(() => useMovieStore.movie);
const movieImg = ref("");

const getImage = () =>
  (movieImg.value = `${imageBaseURL}${movie.value.poster_path}`);

onMounted(async () => {
  await useMovieStore.getMovie(String(route.params.id));
  getImage();
});
</script>
