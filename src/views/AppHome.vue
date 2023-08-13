<template>
  <section class="">
    <AppHeader />
    <div class="container mx-auto bg-red-100 h-[60vh]">
      <div class="border border-green-400 h-full px-5 md:py-14">
        <h1 class="text-gray-800 font-bold text-lg md:text-6xl">
          Populares agora
        </h1>
        <div class="flex items-center gap-5 mt-10">
          <router-link
            class="border rounded overflow-hidden shadow shadow-gray-200"
            to="/"
          >
            <img
              class="max-w-full h-auto"
              src="https://picsum.photos/200/250"
              alt=""
            />
            <div class="py-3">
              <h2 class="font-semibold truncate text-sm">
                Homem-Aranha no Aranhaverso parte 2
              </h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>
