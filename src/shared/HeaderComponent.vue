<template>
  <header class="flex items-center justify-between py-5 self-center w-full border-b border-black">
    <div class="flex items-center gap-24">
      <RouterLink to="/">
        <img v-if="isLogoBlack" src="@/assets/rivoli-logo-black.svg" width="161" height="53" alt="Rivoli Logo" />
        <img v-else src="@/assets/rivoli-logo.svg" width="161" height="53" alt="Rivoli Logo" />
      </RouterLink>
      <NavLinks />
    </div>
    <div class="flex items-center gap-[210px]">
      <div class="flex items-center gap-3">
        <div class="p-[6px] border border-green-200">
          <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
        </div>
        <div class="p-[6px] border border-green-200">
          <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
        </div>
        <p>+7 702 112 00 66</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import NavLinks from './NavLinks.vue'

const route = useRoute()

const isLogoBlack = computed(() => route.name === 'about-us' || route.name === 'not-found')
</script>
