<template>
  <article class="flex flex-col gap-4 px-[200px]">
    <span class="text-gray-400 text-lg">{{ newsDetails.date }}</span>
    <div class="flex flex-col gap-8">
      <h6 class="text-gray-400 font-semibold text-[32px]">{{ newsDetails.title }}</h6>
      <div class="flex flex-col h-full w-full">
        <img :src="src" alt="" class="h-full object-cover self-center" />
      </div>
      <p class="text-gray-400 text-lg">{{ newsDetails.fullDesc }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NewsDetails } from '../../../model'

const props = defineProps<{
  newsDetails: NewsDetails
}>()

const src = computed(() => {
  const path = new URL('@/assets/img/news', import.meta.url)
  return `${path}/${props.newsDetails.img}`
})
</script>
