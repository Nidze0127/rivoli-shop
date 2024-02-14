<template>
  <div class="flex flex-col items-center mt-16 lg:mt-[120px]">
    <h4 class="mb-7 lg:mb-[90px] uppercase font-cormorant text-3xl lg:text-[60px] font-semibold">
      {{ $t('home.partners') }}
    </h4>
    <div class="flex items-center justify-between w-full">
      <PartnerCard v-for="(partner, index) in firstPart" :key="`partner-${index}`" :partner="partner" />
    </div>
    <div class="flex items-center justify-between w-full">
      <PartnerCard v-for="(partner, index) in secondPart" :key="`partner-${index}`" :partner="partner" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SHOP_PARTNERS } from '../../config'
import PartnerCard from './PartnerCard.vue'

const firstPart = computed(() => SHOP_PARTNERS.slice(0, 8))
const secondPart = computed(() => SHOP_PARTNERS.slice(8))
</script>
