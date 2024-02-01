<template>
  <article
    class="grid grid-cols-2 items-center gap-8 font-montserrat"
    :class="{ 'odd:mr-[200px] even:ml-[200px]': !isReversed }"
  >
    <div class="flex flex-col gap-4" :class="{ 'order-last': isReversed }">
      <span class="text-gray-400 text-lg">{{ newsDetails.date }}</span>
      <div class="flex flex-col gap-6">
        <h6 class="text-gray-400 text-2xl font-semibold">{{ newsDetails[locale].title }}</h6>
        <p class="text-gray-400 text-lg">{{ newsDetails[locale].shortDesc }}</p>
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
import { useI18n } from 'vue-i18n'
import { PageLink } from '@/shared'
import type { NewsDetails } from '../../model'

const { locale } = useI18n()

const props = defineProps<{
  newsDetails: NewsDetails
  isReversed?: boolean
}>()

const src = computed(() => {
  const path = new URL('../../../../../public/news', import.meta.url)
  return `${path}/${props.newsDetails.img}`
})
</script>
