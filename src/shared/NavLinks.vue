<template>
  <nav class="flex items-center gap-10 uppercase transition">
    <RouterLink to="/about-us" class="hover:text-gray-300 hover:underline hover:duration-300">О нас</RouterLink>
    <RouterLink to="/gallery" class="hover:text-gray-300 hover:underline hover:duration-300">Галерея</RouterLink>
    <RouterLink to="/news/list" class="hover:text-gray-300 hover:underline hover:duration-300">Новости</RouterLink>
    <RouterLink to="/partners" class="hover:text-gray-300 hover:underline hover:duration-300">Партнеры</RouterLink>
    <RouterLink to="/contacts" class="hover:text-gray-300 hover:underline hover:duration-300">Контакты</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>
