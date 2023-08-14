<template>
  <section>
    <div class="container mx-auto">
      <div class="h-full px-5 md:py-14">
        <h1
          class="text-gray-800 dark:text-neutral-200 font-bold text-lg md:text-6xl"
        >
          Populares agora
        </h1>
        <p class="mt-8 text-gray-700 dark:text-neutral-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          accusamus magnam velit porro nulla facere voluptates optio nam sint
          iure maiores totam minima maxime cupiditate ea error fugiat, beatae
          ducimus?
        </p>
        <PopularMovieList />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PopularMovieList from "./movies/PopularMovieList.vue";
</script>
