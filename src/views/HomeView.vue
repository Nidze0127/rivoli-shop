<template>
  <main class="flex flex-col gap-28">
    <SwiperCarousel />
    <div class="flex items-center gap-16 px-24">
      <AboutUsTiles v-for="(item, index) in 3" :key="`tile-${index}`" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { SwiperCarousel, AboutUsTiles } from '../components';
</script>