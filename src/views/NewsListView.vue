<template>
  <section class="flex flex-col items-center gap-[90px]">
    <h1 class="font-cormorant font-bold text-[60px] uppercase text-center">Новости</h1>
    <NewsCard v-for="(item, index) in 4" :key="index" />
    <button type="button" class="flex gap-1 w-fit">
      <span class="uppercase font-montserrat">загрузить ещё</span>
      <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1 rotate-180" alt="" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { NewsCard } from '@/components'
</script>
