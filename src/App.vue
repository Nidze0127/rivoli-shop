<template>
  <div id="app" class="flex flex-col px-[135px]">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HeaderComponent, FooterComponent } from './components'
</script>
