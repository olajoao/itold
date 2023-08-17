<template>
  <article
    class="py-10 border-b border-gray-200 dark:border-neutral-700 first:border-none last:border-none"
  >
    <h1
      class="truncate text-gray-800 dark:text-neutral-200 text-sm sm:text-base mb-2 flex items-center gap-x-3"
    >
      <span>{{ review?.title }}</span>
      <span class="text-sm mt-0.5 text-gray-500 dark:text-neutral-400">
        {{ review?.createdAt }}
      </span>
    </h1>
    <p class="text-gray-700 dark:text-neutral-200 text-xs sm:text-sm">
      {{ review?.description }}
    </p>
  </article>
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

<style scoped></style>
