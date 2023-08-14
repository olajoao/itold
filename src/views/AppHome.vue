<template>
  <section>
    <div class="container mx-auto">
      <div class="h-full px-5 py-4 md:py-14">
        <h1
          class="mb-4 text-gray-800 dark:text-neutral-200 font-bold text-xl md:text-6xl"
        >
          Olá criticante,
        </h1>
        <p class="text-gray-700 dark:text-neutral-300">
          Tá na dúvida de assistir
          <span class="bg-emerald-100 dark:bg-emerald-500/20 px-1"
            >aquele filme</span
          >?
        </p>
        <p class="text-gray-700 dark:text-neutral-300">
          Quer saber o que os outros acharam dele?
        </p>
        <p class="text-gray-700 dark:text-neutral-300">
          Assistiu um filme maravilhoso e precisa contar para todo mundo?
        </p>

        <p class="mt-4 font-bold text-neutral-700 dark:text-neutral-300">
          Seja muito bem vindo!
        </p>

        <h1
          class="mt-14 text-gray-800 dark:text-neutral-200 font-bold text-xl md:text-4xl"
        >
          Populares agora
        </h1>
        <PopularMovieList />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PopularMovieList from "./movies/PopularMovieList.vue";
</script>
