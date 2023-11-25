<template>
  <main class="flex flex-col px-[135px] overflow-x-hidden">
    <HeaderComponent />
    <RouterView />
    <FooterComponent v-if="isFooterVisible" />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { HeaderComponent, FooterComponent } from './components'

const route = useRoute()

const isFooterVisible = computed(() => route.name !== 'not-found')
</script>
