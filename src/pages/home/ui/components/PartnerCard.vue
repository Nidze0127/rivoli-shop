<template>
  <a :href="partner.link" target="_blank">
    <img :src="partnerImg" alt="" width="100" height="70" class="hidden lg:block" />
    <img :src="partnerImg" alt="" width="30" height="30" class="lg:hidden" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PartnerData } from '../../model'

const props = defineProps<{
  partner: PartnerData
}>()

const partnerImg = computed(() => {
  const path = new URL('../../../../../public/partners', import.meta.url).href
  return `${path}/${props.partner.img}`
})
</script>
