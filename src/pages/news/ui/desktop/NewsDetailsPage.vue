<template>
  <section class="flex flex-col items-center gap-24 font-montserrat">
    <NewsArticle />
    <div class="flex flex-col gap-12">
      <h6 class="text-semibold text-2xl">Читайте также:</h6>
      <div class="flex flex-col gap-16">
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NewsCard, NewsArticle } from './components'
</script>
