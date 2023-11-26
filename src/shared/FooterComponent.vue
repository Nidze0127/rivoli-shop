<template>
  <footer class="flex flex-col items-center gap-12 py-12 self-center w-full border-t border-black">
    <RouterLink to="/" class="flex flex-col items-center gap-5">
      <img src="@/assets/footer-logo.svg" alt="" />
      <p class="uppercase font-medium font-montserrat">Галерея уюта и комфорта</p>
    </RouterLink>
    <NavLinks />
    <div class="flex gap-3">
      <div class="p-[6px] border border-green-200">
        <img src="@/assets/instagram.svg" width="16" height="16" alt="Instagram link" />
      </div>
      <div class="p-[6px] border border-green-200">
        <img src="@/assets/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavLinks from './NavLinks.vue'
</script>
