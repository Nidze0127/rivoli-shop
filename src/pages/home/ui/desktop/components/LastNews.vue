<template>
  <div class="flex flex-col items-center gap-24 mt-[120px]">
    <h4 class="font-cormorant font-semibold text-[60px] uppercase text-center">новости</h4>
    <div class="grid grid-cols-2 items-center gap-8">
      <div>
        <img src="@/assets/last-news.png" alt="" class="w-full h-full object-fill" />
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-lg font-montserrat text-gray-500">08.01.2021</p>
        <p class="text-2xl font-montserrat font-semibold">
          Мне по фэншуй: как правильно сделать перестановку мебели в доме
        </p>
        <p class="text-lg font-montserrat font-light">
          “В любой непонятной ситуации двигай мебель”, — смеется Александра Галкина, которая занимается фэншуй более
          десяти лет. Она поясняет: согласно этой древнекитайской практике, в каждом доме есть энергетически сильные
          точки. Они помогают реализовать планы и мечты. Соответственно, в противовес им существуют “слабые” зоны,
          где...
        </p>
        <PageLink :route="{ name: 'news' }" :text="$t('pageLink.readDetails')" />
      </div>
    </div>
    <PageLink :route="{ name: 'news' }" :text="$t('pageLink.news')" has-margin />
  </div>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
</script>
