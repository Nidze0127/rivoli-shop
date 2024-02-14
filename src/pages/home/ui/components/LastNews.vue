<template>
  <div class="flex flex-col items-center gap-10 lg:gap-24 mt-16 lg:mt-[120px]">
    <h4 class="font-cormorant font-semibold text-3xl lg:text-[60px] uppercase text-center">{{ $t('home.news') }}</h4>
    <NewsCard :news-details="newsCollection[0]" is-reversed />
    <PageLink :route="{ name: 'news-list' }" :text="$t('pageLink.news')" has-margin class="hidden lg:block" />
    <PageLink :route="{ name: 'news-list' }" :text="$t('pageLink.news')" class="lg:hidden" />
  </div>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
import { newsCollection } from '@/pages/news/config'
import { NewsCard } from '@/pages/news/ui/components'
</script>
