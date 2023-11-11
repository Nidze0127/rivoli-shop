<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HeaderComponent, FooterComponent } from './components';

</script>