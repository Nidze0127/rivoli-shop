<template>
  <article class="flex flex-col gap-4 lg:px-[200px]">
    <span class="text-gray-400 lg:text-lg">{{ newsDetails.date }}</span>
    <div class="flex flex-col gap-4 lg:gap-8">
      <h6 class="text-gray-400 font-semibold text-xl lg:text-[32px]">{{ newsDetails[locale].title }}</h6>
      <div class="flex flex-col h-full w-full">
        <img :src="src" alt="" class="h-full object-cover self-center" />
      </div>
      <p class="text-gray-400 lg:text-lg">{{ newsDetails[locale].fullDesc }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { NewsDetails } from '../../model'

const { locale } = useI18n()

const props = defineProps<{
  newsDetails: NewsDetails
}>()

const src = computed(() => {
  const path = new URL('@/assets/img/news', import.meta.url)
  return `${path}/${props.newsDetails.img}`
})
</script>
