<template>
  <header class="flex items-center justify-between py-5 self-center w-full border-b border-black">
    <div class="flex items-center gap-24">
      <img src="@/assets/rivoli-logo.svg" width="161" height="53" alt="Rivoli Logo" />
      <nav class="flex items-center gap-10 uppercase transition">
        <RouterLink to="/" class="hover:text-gray-300 hover:underline hover:duration-300">О нас</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Галерея</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Новости</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Партнеры</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Контакты</RouterLink>
      </nav>
    </div>
    <div class="flex items-center gap-[210px]">
      <div class="flex items-center gap-3">
        <div class="p-[6px] border border-gray-200">
          <img src="@/assets/instagram.svg" width="16" height="16" alt="Instagram link" />
        </div>
        <div class="p-[6px] border border-gray-200">
          <img src="@/assets/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
        </div>
        <p>+7 702 112 00 66</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
