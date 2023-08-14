<template>
  <section class="px-6 sm:px-10 py-4 xl:py-10 container mx-auto">
    <router-link
      to="/"
      class="flex items-center mb-5 gap-x-5 text-gray-600 dark:text-gray-200"
    >
      <MoveLeft class="w-5 h-5" />
      <span class="">Back</span>
    </router-link>
    <div class="flex flex-wrap">
      <div class="px-0 pb-2 sm:p-0">
        <img
          class="object-contain h-full"
          :src="movieImg"
          :alt="movie?.overview"
          loading="lazy"
          width="400"
          height="600"
        />
      </div>
      <div class="md:px-8 flex-1 mt-4 md:mt-0">
        <h1 class="text-2xl sm:text-3xl text-neutral-800 dark:text-gray-100">
          {{ movie?.original_title }}
        </h1>
        <p class="hidden sm:block text-neutral-700 dark:text-gray-200 my-5">
          {{ movie?.overview }}
        </p>
      </div>
    </div>

    <MovieReview />
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { MoveLeft } from "lucide-vue-next";
import { MovieStore } from "@store/MovieStore.ts";
import MovieReview from "./MoviewReview.vue";

const useMovieStore = MovieStore();
const route = useRoute();
const router = useRouter();

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

const movie = computed(() => useMovieStore.movie);
const movieImg = ref("");

const getImage = () =>
  (movieImg.value = `${imageBaseURL}${movie.value.poster_path}`);

onMounted(async () => {
  const movieId = route.params.id ?? null;
  const movieWasFound = await useMovieStore.getMovie(String(movieId));

  if (!movieWasFound) router.push({ name: "home" });

  getImage();
});
</script>
