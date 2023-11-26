<template>
  <main class="flex flex-col items-center gap-[90px] py-[100px]">
    <h1 class="font-cormorant font-bold text-[60px] uppercase text-center">{{ $t('contacts.title') }}</h1>
    <ContactCard v-for="(shop, index) in shops" :key="`shop-${index}`" :shop-data="shop" />
  </main>
</template>

<script setup lang="ts">
import { shops } from '../../config'
import { ContactCard } from './components'
</script>
