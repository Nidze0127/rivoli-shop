<template>
    <header class="flex items-center gap-28 px-20 py-8 bg-blue-main">
        <p class="text-green-logo text-5xl font-medium">RIVOLI</p>
        <nav class="flex justify-between items-center w-full py-6 px-11 underline bg-blue-secondary rounded-2xl">
            <RouterLink to="/">About us</RouterLink>
            <RouterLink to="/about">Gallery</RouterLink>
            <RouterLink to="/about">News</RouterLink>
            <RouterLink to="/about">Partners</RouterLink>
            <RouterLink to="/about">Contacts</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts"></script>