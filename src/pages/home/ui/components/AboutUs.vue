<template>
  <div class="hidden lg:flex flex-col gap-40">
    <div class="relative w-[1070px] self-end mt-[90px]">
      <div class="flex flex-wrap items-end gap-x-10">
        <p class="w-fit font-cormorant font-bold text-[120px] text-green-200 uppercase leading-[120px]">
          {{ $t('home.about.gallery') }}
        </p>
        <p class="w-fit font-cormorant font-bold text-[110px] uppercase leading-[120px]">{{ $t('home.about.cozy') }}</p>
        <p class="w-fit font-cormorant font-bold text-[110px] uppercase leading-[120px]">
          {{ $t('home.about.comfort') }}
        </p>
        <p class="w-[300px] mb-5 font-light font-montserrat">
          {{ $t('home.about.outstanding') }}
        </p>
      </div>
      <ImageCarousel />
    </div>
    <div class="flex items-center gap-8 px-12 self-center">
      <img src="@/assets/rivoli-gallery.jpg" width="570" height="684" alt="" />
      <div class="flex flex-col">
        <img src="@/assets/rivoli-logo-2.svg" width="192" height="63" alt="" />
        <p class="mt-10 font-montserrat text-xl uppercase">{{ $t('home.about.help.title') }}</p>
        <ul class="mt-4 pl-4 w-[470px] list-disc font-montserrat text-gray-400">
          <li>{{ $t('home.about.help.create') }}</li>
          <li>{{ $t('home.about.help.items') }}</li>
          <li>{{ $t('home.about.help.order') }}</li>
        </ul>
        <PageLink :route="{ name: 'about-us' }" :text="$t('pageLink.details')" has-margin />
      </div>
    </div>
  </div>
  <div class="flex lg:hidden flex-col gap-4">
    <div>
      <p class="w-fit font-cormorant font-bold text-[55px] text-green-200 uppercase leading-[100px]">
        {{ $t('home.about.gallery') }}
      </p>
      <p class="w-fit font-cormorant font-bold text-[55px] uppercase leading-[100px]">{{ $t('home.about.cozy') }}</p>
      <p class="w-fit font-cormorant font-bold text-[55px] uppercase leading-[100px]">
        {{ $t('home.about.comfort') }}
      </p>
    </div>
    <ImageCarousel />
    <div class="flex flex-col items-center gap-8 self-center">
      <img src="@/assets/rivoli-gallery.jpg" alt="" />
      <div class="flex flex-col">
        <img src="@/assets/rivoli-logo-2.svg" width="192" height="63" alt="" />
        <p class="mt-10 font-montserrat text-xl uppercase">{{ $t('home.about.help.title') }}</p>
        <ul class="mt-4 pl-4 w-[470px] list-disc font-montserrat text-gray-400">
          <li>{{ $t('home.about.help.create') }}</li>
          <li>{{ $t('home.about.help.items') }}</li>
          <li>{{ $t('home.about.help.order') }}</li>
        </ul>
        <PageLink :route="{ name: 'gallery' }" :text="$t('pageLink.details')" has-margin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
import ImageCarousel from './ImageCarousel.vue'
</script>
