<template>
  <div class="relative flex flex-col items-center pt-16">
    <img src="@/assets/logo-back.svg" class="absolute top-0 -right-[200px]" alt="" />
    <h4 class="mb-10 text-[50px] uppercase font-semibold font-cormorant">{{ $t('home.gallery') }}</h4>
    <GalleryCarousel />
    <PageLink :route="{ name: 'gallery' }" :text="$t('pageLink.gallery')" has-margin />
  </div>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
import GalleryCarousel from './GalleryCarousel.vue'
</script>
