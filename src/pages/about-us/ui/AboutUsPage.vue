<template>
  <main class="flex flex-col items-center py-12 lg:py-[100px]">
    <div class="absolute top-0 left-0 h-[500px] lg:h-[1000px] w-full bg-green-100 -z-10"></div>
    <div class="flex flex-col items-center gap-12 mb-[120px]">
      <h1 class="font-cormorant font-bold text-3xl lg:text-[60px] uppercase text-center">{{ $t('aboutUs.title') }}</h1>
      <p class="w-4/5 font-cormorant font-bold text-2xl xl:text-[40px] xl:leading-[50px] text-center">
        {{ $t('aboutUs.desc') }}
      </p>
      <img src="@/assets/about-main.jpg" alt="" />
    </div>
    <img src="@/assets/rivoli-logo-3.svg" width="400" alt="" class="mb-12 hidden lg:block" />
    <img src="@/assets/rivoli-logo-3.svg" width="200" alt="" class="mb-12 lg:hidden" />
    <div class="flex flex-col gap-5 lg:w-[475px] pl-8">
      <p class="font-montserrat text-xl font-medium uppercase">{{ $t('aboutUs.help.title') }}</p>
      <ul class="flex flex-col gap-3 lg:gap-0 text-gray-400 font-montserrat list-disc">
        <li>{{ $t('aboutUs.help.create') }}</li>
        <li>{{ $t('aboutUs.help.items') }}</li>
        <li>{{ $t('aboutUs.help.order') }}</li>
      </ul>
    </div>
    <OurPartners class="w-full" />
    <img src="@/assets/rivoli-gallery.jpg" width="570" height="684" alt="" class="mt-[120px]" />
    <p class="mt-24 w-[360px] font-cormorant text-3xl lg:text-[64px] font-bold text-center leading-[70px]">
      {{ $t('aboutUs.check') }}
    </p>
    <PageLink :route="{ name: 'gallery' }" :text="$t('pageLink.gallery')" has-margin />
  </main>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
import OurPartners from '../../home/ui/components/OurPartners.vue'
</script>
