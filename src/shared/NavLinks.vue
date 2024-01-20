<template>
  <nav class="flex flex-col items-center gap-4 lg:gap-10 uppercase transition lg:flex-row">
    <RouterLink to="/about-us" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.about')
    }}</RouterLink>
    <RouterLink to="/gallery" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.gallery')
    }}</RouterLink>
    <RouterLink to="/news/list" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.news')
    }}</RouterLink>
    <RouterLink to="/contacts" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.contacts')
    }}</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
