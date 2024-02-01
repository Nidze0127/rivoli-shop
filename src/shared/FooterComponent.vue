<template>
  <footer class="flex flex-col items-center gap-12 py-12 self-center w-full border-t border-black">
    <RouterLink to="/" class="flex flex-col items-center gap-5">
      <img src="@/assets/footer-logo.svg" alt="" />
      <p class="uppercase font-medium font-montserrat">{{ $t('footer.title') }}</p>
    </RouterLink>
    <NavLinks />
    <div class="flex gap-3">
      <a href="https://www.instagram.com/rivoli.gallery/" target="_blank" class="p-[6px] border border-green-200">
        <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
      </a>
      <!-- <div class="p-[6px] border border-green-200">
        <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
      </div> -->
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavLinks from './NavLinks.vue'
</script>
