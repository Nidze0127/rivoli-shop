<template>
  <section class="flex flex-col items-center gap-24 font-montserrat">
    <NewsArticle :news-details="currentArticle" />
    <div v-if="moreArticles.length" class="flex flex-col gap-12">
      <h6 class="text-semibold text-2xl">{{ $t('news.readMore') }}</h6>
      <div class="flex flex-col gap-16">
        <NewsCard v-for="item in moreArticles" :key="`read-more-news-${item.id}`" :news-details="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsCollection, emptyArticle } from '../../config'
import { NewsCard, NewsArticle } from './components'

const route = useRoute()

const getRandomIdx = (arrayLen: number) => Math.floor(Math.random() * arrayLen)

const createUniqueIdx = (arrayLen: number, existIdx: number) => {
  let idx = 0
  idx = getRandomIdx(arrayLen)
  while (idx === existIdx) {
    idx = getRandomIdx(arrayLen)
  }
  return idx
}

const articleID = computed(() => route.params.id)

const currentArticle = computed(() => {
  return newsCollection.find((news) => news.id === articleID.value) ?? emptyArticle
})

const moreArticles = computed(() => {
  const currentArticleIdx = newsCollection.findIndex((news) => news.id === articleID.value)
  const res = []
  const lastIdx = newsCollection.length - 1
  let moreNews1 = undefined
  let moreNews2 = undefined

  if (currentArticleIdx === lastIdx) {
    moreNews1 = newsCollection[currentArticleIdx - 1]
    moreNews2 = newsCollection[currentArticleIdx - 2]
  } else if (currentArticleIdx === 0) {
    moreNews1 = newsCollection[currentArticleIdx + 1]
    moreNews2 = newsCollection[currentArticleIdx + 2]
  } else {
    const newsIdx = getRandomIdx(lastIdx)
    moreNews1 = newsCollection[newsIdx]
    moreNews2 = newsCollection[createUniqueIdx(lastIdx, newsIdx)]
  }

  if (moreNews1) {
    res.push(moreNews1)
  }
  if (moreNews2) {
    res.push(moreNews2)
  }

  return res
})
</script>
