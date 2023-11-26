<template>
  <article class="grid grid-cols-2 items-center gap-8 font-montserrat odd:mr-[200px] even:ml-[200px]">
    <div class="flex flex-col gap-4">
      <span class="text-gray-400 text-lg">{{ newsDetails.date }}</span>
      <div class="flex flex-col gap-6">
        <h6 class="text-gray-400 text-2xl font-semibold">{{ newsDetails.title }}</h6>
        <p class="text-gray-400 text-lg">{{ newsDetails.shortDesc }}</p>
        <PageLink
          :route="{ name: 'news-details', params: { id: newsDetails.id } }"
          :text="$t('pageLink.readDetails')"
          has-margin
        />
      </div>
    </div>
    <div class="h-full w-full">
      <img :src="src" alt="" class="h-full object-cover" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PageLink } from '@/shared'
import type { NewsDetails } from '../../../model'

const props = defineProps<{
  newsDetails: NewsDetails
}>()

const src = computed(() => {
  const path = new URL('@/assets/img/news', import.meta.url)
  return `${path}/${props.newsDetails.img}`
})
</script>
