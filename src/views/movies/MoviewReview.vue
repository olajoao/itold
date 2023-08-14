<template>
  <section class="py-14">
    <h1 class="text-3xl font-semibold text-gray-800">Discussão (20)</h1>
    <form class="mb-10" action="">
      <div class="my-5">
        <label class="text-sm mb-1.5 block" for="reviewTitle">Título</label>
        <input
          type="text"
          class="bg-white dark:bg-neutral-800 w-full p-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-neutral-600 focus:ring-gray-400 dark:focus:ring-neutral-500"
          placeholder="Gostei muito!"
        />
      </div>
      <textarea
        class="bg-white dark:bg-neutral-800 outline-none ring-1 ring-gray-300 dark:ring-neutral-600 focus:ring-gray-400 dark:focus:ring-neutral-500 rounded-lg p-3 w-full"
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Escreva um comentário.."
      ></textarea>
      <button
        class="mt-5 px-10 py-2 font-semibold tracking-widest bg-emerald-600 text-white text-xs sm:text-sm rounded-md shadow shadow-emerald-700"
        type="submit"
      >
        Comentar
      </button>
    </form>
    <article
      class="py-10 border-b border-gray-200 dark:border-neutral-700 first:border-none last:border-none"
    >
      <h1
        class="truncate text-gray-800 dark:text-neutral-200 text-sm sm:text-base mb-2 flex items-center gap-x-3"
      >
        <span>Gostei muito</span>
        <span class="text-sm mt-0.5 text-gray-500 dark:text-neutral-400">
          13/12/2022
        </span>
      </h1>
      <p class="text-gray-700 dark:text-neutral-200 text-xs sm:text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officiis
        nihil quos alias, molestias labore ad est porro placeat facilis.
      </p>
    </article>
    <article
      class="py-10 border-b border-gray-200 dark:border-neutral-700 first:border-none last:border-none"
    >
      <h1
        class="truncate text-gray-800 dark:text-neutral-200 text-sm sm:text-base mb-2 flex items-center gap-x-3"
      >
        <span>Não gostei, asmei</span>
        <span class="text-sm mt-0.5 text-gray-500 dark:text-neutral-400">
          13/12/2022
        </span>
      </h1>
      <p class="text-gray-700 dark:text-neutral-200 text-xs sm:text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit commodi,
        architecto, culpa nostrum dolores autem doloribus facilis illo aperiam
        laboriosam quis. Nostrum ea obcaecati aut debitis eveniet vero
        voluptates magni?
      </p>
    </article>
    <article
      class="py-10 border-b border-gray-200 dark:border-neutral-700 first:border-none last:border-none"
    >
      <h1
        class="truncate text-gray-800 dark:text-neutral-200 text-sm sm:text-base mb-2 flex items-center gap-x-3"
      >
        <span>HORRÍVEL</span>
        <span class="text-sm mt-0.5 text-gray-500 dark:text-neutral-400">
          13/12/2022
        </span>
      </h1>
      <p class="text-gray-700 dark:text-neutral-200 text-xs sm:text-sm">
        Lorem ipsum dolor sit amet.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts"></script>
