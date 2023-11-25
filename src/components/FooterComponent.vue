<template>
  <footer class="flex flex-col items-center gap-12 py-12 self-center w-full border-t border-black">
    <div class="flex flex-col items-center gap-5">
      <img src="@/assets/footer-logo.svg" alt="" />
      <p class="uppercase font-medium font-montserrat">Галерея уюта и комфорта</p>
    </div>
    <nav class="flex items-center gap-10 uppercase transition">
      <RouterLink to="/" class="hover:text-gray-300 hover:underline hover:duration-300">О нас</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Галерея</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Новости</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Партнеры</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Контакты</RouterLink>
    </nav>
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
