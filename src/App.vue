<template>
  <main class="flex flex-col px-4 lg:px-[120px] overflow-x-hidden">
    <HeaderComponent />
    <RouterView />
    <FooterComponent v-if="isFooterVisible" />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { HeaderComponent, FooterComponent } from '@/shared'

const route = useRoute()

const isFooterVisible = computed(() => route.name !== 'not-found')
</script>
