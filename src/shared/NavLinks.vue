<template>
  <nav class="flex flex-col items-center gap-4 lg:gap-10 whitespace-nowrap uppercase transition lg:flex-row">
    <RouterLink
      to="/about-us"
      class="hover:text-green-100 hover:underline hover:duration-300"
      @click="emit('onLinkClick')"
      >{{ $t('navLinks.about') }}</RouterLink
    >
    <RouterLink
      to="/gallery"
      class="hover:text-green-100 hover:underline hover:duration-300"
      @click="emit('onLinkClick')"
      >{{ $t('navLinks.gallery') }}</RouterLink
    >
    <RouterLink
      to="/news/list"
      class="hover:text-green-100 hover:underline hover:duration-300"
      @click="emit('onLinkClick')"
      >{{ $t('navLinks.news') }}</RouterLink
    >
    <RouterLink
      to="/contacts"
      class="hover:text-green-100 hover:underline hover:duration-300"
      @click="emit('onLinkClick')"
      >{{ $t('navLinks.contacts') }}</RouterLink
    >
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const emit = defineEmits<{
  (e: 'onLinkClick'): void
}>()
</script>
