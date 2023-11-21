<template>
    <header class="flex items-center py-5 max-w-[1170px] self-center border-b border-black">
        <img src="@/assets/rivoli-logo.svg" width="161" height="53" alt="Rivoli Logo">
        <nav class="flex items-center gap-10 ml-24 uppercase transition">
            <RouterLink to="/" class="hover:text-gray-300 hover:underline hover:duration-300">About us</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Gallery</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">News</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Partners</RouterLink>
            <RouterLink to="/about" class="hover:text-gray-300 hover:underline hover:duration-300">Contacts</RouterLink>
        </nav>
        <div class="flex items-center gap-[10px] ml-[210px]">
            <div class="p-[6px] border border-gray-200"><img src="@/assets/instagram.svg" width="16" height="16" alt="Instagram link"></div>
            <div class="p-[6px] border border-gray-200"><img src="@/assets/whatsapp.svg" width="16" height="16" alt="Whatsapp link"></div>
            <p>+7 702 112 00 66</p>
        </div>
    </header>
</template>

<script setup lang="ts"></script>