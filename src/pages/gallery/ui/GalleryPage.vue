<template>
  <main class="flex flex-col items-center gap-[90px] py-[100px]">
    <div class="flex flex-col items-center font-cormorant">
      <h1 class="font-bold text-[60px] uppercase text-center">{{ $t('gallery.title') }}</h1>
      <p class="font-bold text-xl">{{ $t('gallery.photos') }}</p>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <img v-for="item in 36" :key="`gallery-photo-${item}`" :src="photoSrc(item)" alt="" />
    </div>
  </main>
</template>

<script setup lang="ts">
const photoSrc = (img: number) => {
  const path = new URL('/src/assets/img/gallery', import.meta.url)
  return `${path}/gallery-img-${img}.jpg`
}
</script>
