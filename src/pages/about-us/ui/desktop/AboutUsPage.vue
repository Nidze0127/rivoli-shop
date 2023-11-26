<template>
  <main class="flex flex-col items-center py-[100px]">
    <div class="absolute top-0 left-0 h-[1000px] w-full bg-green-100 -z-10"></div>
    <div class="flex flex-col items-center gap-12 mb-[120px]">
      <h1 class="font-cormorant font-bold text-[60px] uppercase text-center">{{ $t('aboutUs.title') }}</h1>
      <p class="w-4/5 font-cormorant font-bold text-[64px] text-center">
        {{ $t('aboutUs.desc') }}
      </p>
      <img src="@/assets/about-main.jpg" alt="" />
    </div>
    <img src="@/assets/rivoli-logo-3.svg" width="400" alt="" class="mb-12" />
    <div class="flex flex-col gap-5 w-[475px] pl-8">
      <p class="font-montserrat text-xl font-medium uppercase">{{ $t('aboutUs.help.title') }}</p>
      <div class="flex flex-col text-gray-400 font-montserrat">
        <p>• {{ $t('aboutUs.help.create') }}</p>
        <p>• {{ $t('aboutUs.help.items') }}</p>
        <p>• {{ $t('aboutUs.help.order') }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center w-full mt-[120px] px-12">
      <div class="flex items-center justify-between w-full">
        <img src="@/assets/partner-1.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-2.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-3.svg" alt="" width="100" height="70" />
        <img src="@/assets/partner-4.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-5.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-6.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-7.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-8.png" alt="" width="100" height="70" />
      </div>
      <div class="flex items-center justify-between w-full">
        <img src="@/assets/partner-9.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-10.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-11.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-12.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-13.png" alt="" width="100" height="70" />
        <img src="@/assets/partner-14.svg" alt="" width="100" height="70" />
        <img src="@/assets/partner-15.png" alt="" width="100" height="70" />
      </div>
    </div>
    <img src="@/assets/rivoli-gallery.jpg" width="570" height="684" alt="" class="mt-[120px]" />
    <p class="mt-24 w-[360px] font-cormorant text-[64px] font-bold text-center leading-[70px]">
      {{ $t('aboutUs.check') }}
    </p>
    <PageLink :route="{ name: 'gallery' }" :text="$t('pageLink.gallery')" has-margin />
  </main>
</template>

<script setup lang="ts">
import { PageLink } from '@/shared'
</script>
