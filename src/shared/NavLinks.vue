<template>
  <nav class="flex items-center gap-10 uppercase transition">
    <RouterLink to="/about-us" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.about')
    }}</RouterLink>
    <RouterLink to="/gallery" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.gallery')
    }}</RouterLink>
    <RouterLink to="/news/list" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.news')
    }}</RouterLink>
    <RouterLink to="/partners" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.partners')
    }}</RouterLink>
    <RouterLink to="/contacts" class="hover:text-green-100 hover:underline hover:duration-300">{{
      $t('navLinks.contacts')
    }}</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>
