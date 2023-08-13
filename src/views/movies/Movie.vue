<template>
  <section class="p-10">
    <router-link to="/" class="flex items-center mb-5 gap-x-5">
      <MoveLeft class="w-5 h-5" />
      <span>Back</span>
    </router-link>
    <div class="flex">
      <div class="w-[600px]">
        <img src="https://picsum.photos/600" alt="" />
      </div>
      <div class="px-8 flex-1">
        <h1 class="text-3xl text-neutral-800">Lorem ipsum</h1>
        <p class="text-neutral-700 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          labore! Ex consequatur perferendis animi, quos quia quae non molestiae
          iusto unde enim id dolorum qui inventore optio temporibus quam,
          aspernatur aperiam eaque dignissimos a sit necessitatibus fugiat?
          Mollitia animi magnam illo neque hic, amet asperiores molestiae error
          atque incidunt distinctio enim sint vel ipsam. Fugiat dolorum cum
          consequatur quod laboriosam totam harum, eos tenetur! Voluptas
          consequuntur quos unde eum voluptatem error sapiente sed quibusdam.
          Quos dolorem cumque facere perferendis eius.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveLeft } from "lucide-vue-next";
</script>
