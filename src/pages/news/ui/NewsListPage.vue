<template>
  <section class="flex flex-col items-center gap-[90px]">
    <h1 class="font-cormorant font-bold text-[60px] uppercase text-center">{{ $t('news.title') }}</h1>
    <NewsCard v-for="item in visibleNews" :key="`news-details-${item.id}`" :news-details="item" />
    <button v-if="isButtonVisible" type="button" class="flex gap-1 w-fit" @click="pushVisibleNews">
      <span class="uppercase font-montserrat">{{ $t('news.loadMore') }}</span>
      <img src="@/assets/icons/link-arrow.svg" width="12" height="6" class="mt-1 rotate-180" alt="" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { newsCollection } from '../config'
import { NewsCard } from './components'
import type { NewsDetails } from '../model'

const visibleNews = ref<NewsDetails[]>(newsCollection.slice(0, 4))

const counter = ref(0)

const isButtonVisible = computed(() => counter.value * 4 < newsCollection.length)

const pushVisibleNews = () => {
  counter.value += 1
  visibleNews.value.push(...newsCollection.slice(4 * counter.value, 4 + 4 * counter.value))
  console.log(visibleNews.value)
}
</script>
