<template>
  <main class="flex flex-col px-[135px] overflow-x-hidden">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HeaderComponent, FooterComponent } from './components'
</script>
