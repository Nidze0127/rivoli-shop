<template>
  <main class="flex flex-col items-center gap-10 lg:gap-[90px] py-12 lg:py-[100px]">
    <div class="flex flex-col gap-6 items-center font-cormorant">
      <h1 class="font-bold text-3xl lg:text-[60px] uppercase text-center">{{ $t('gallery.title') }}</h1>
      <p class="font-bold uppercase">{{ $t('gallery.photos') }}</p>
    </div>
    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-10">
      <img v-for="item in 33" :key="`gallery-photo-${item}`" :src="photoSrc(item)" alt="" />
    </div>
  </main>
</template>

<script setup lang="ts">
const photoSrc = (img: number) => {
  const path = new URL('../../../../public/gallery', import.meta.url).href

  return `${path}/gallery-img-${img}.jpg`
}
</script>
