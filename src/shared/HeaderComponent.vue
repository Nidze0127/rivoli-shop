<template>
  <header class="hidden lg:flex items-center justify-between py-5 self-center w-full border-b border-black">
    <div class="flex items-center gap-24">
      <RouterLink to="/">
        <img v-if="isLogoBlack" src="@/assets/rivoli-logo-black.svg" width="161" height="53" alt="Rivoli Logo" />
        <img v-else src="@/assets/rivoli-logo.svg" width="161" height="53" alt="Rivoli Logo" />
      </RouterLink>
      <NavLinks />
    </div>
    <div class="flex items-center gap-14">
      <LangSelector />
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
  <header class="flex items-center justify-between py-3 w-full border-b border-black lg:hidden">
    <button type="button" class="invisible">
      <img src="@/assets/icons/burger-menu.svg" alt="" />
    </button>
    <RouterLink to="/">
      <img v-if="isLogoBlack" src="@/assets/rivoli-logo-black.svg" width="161" height="53" alt="Rivoli Logo" />
      <img v-else src="@/assets/rivoli-logo-mobile.svg" alt="Rivoli Logo" />
    </RouterLink>
    <button type="button" @click="isMenuOpen = !isMenuOpen">
      <img src="@/assets/icons/burger-menu.svg" alt="" />
    </button>
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="absolute top-[60px] left-0 flex flex-col items-center gap-6 w-full py-10 bg-white z-50"
      >
        <NavLinks />
        <div class="flex items-center gap-3">
          <div class="p-[6px] border border-green-200">
            <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
          </div>
          <div class="p-[6px] border border-green-200">
            <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
          </div>
        </div>
        <p>+7 702 112 00 66</p>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import NavLinks from './NavLinks.vue'
import LangSelector from './LangSelector.vue'

const route = useRoute()

const isLogoBlack = computed(() => route.name === 'about-us' || route.name === 'not-found')

const isMenuOpen = ref(false)
</script>
