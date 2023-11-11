<template>
  <main class="flex flex-col gap-28">
    <SwiperCarousel />
    <div class="flex flex-col gap-28">
      <div class="flex items-center gap-16 px-24">
        <AboutUsTiles v-for="(item, index) in 3" :key="`tile-${index}`" />
      </div>
      <GalleryBlock />
    </div>
  </main>
</template>

<script setup lang="ts">
import { SwiperCarousel, AboutUsTiles, GalleryBlock } from '../components';
</script>