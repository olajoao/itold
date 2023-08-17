<template>
  <section class="py-14">
    <h1 class="text-3xl font-semibold text-gray-800 dark:text-neutral-300">
      Discussão (20)
    </h1>
    <form class="mb-10" action="">
      <div class="my-5">
        <label
          class="text-neutral-600 dark:text-neutral-300 text-sm mb-1.5 block"
          for="reviewTitle"
          >Título</label
        >
        <input
          type="text"
          class="bg-white dark:bg-neutral-800 w-full p-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-neutral-600 focus:ring-gray-400 dark:focus:ring-neutral-500 text-neutral-700 dark:text-neutral-300"
          placeholder="Gostei muito!"
        />
      </div>
      <textarea
        class="bg-white dark:bg-neutral-800 outline-none ring-1 ring-gray-300 dark:ring-neutral-600 focus:ring-gray-400 dark:focus:ring-neutral-500 rounded-lg p-3 w-full text-neutral-700 dark:text-neutral-300"
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Escreva um comentário.."
      ></textarea>
      <button
        class="uppercase sm:capitalize w-full sm:w-max mt-5 px-10 py-6 sm:py-2 font-semibold tracking-widest bg-emerald-600 text-white text-xs sm:text-sm rounded-md shadow shadow-emerald-700"
        type="submit"
      >
        Comentar
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ReviewProps } from "@store/ReviewStore";
import type { PropType } from "vue";

defineProps({
  review: {
    type: Object as PropType<ReviewProps>,
    default: [],
  },
});
</script>
