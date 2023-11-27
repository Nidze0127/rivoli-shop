<template>
  <div class="embla mt-[90px]" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide"><img src="@/assets/swiper-1.jpg" height="560" alt="" class="embla__slide__img" /></div>
      <div class="embla__slide"><img src="@/assets/swiper-2.jpg" height="560" alt="" class="embla__slide__img" /></div>
      <div class="embla__slide"><img src="@/assets/swiper-3.jpg" height="560" alt="" class="embla__slide__img" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaNode] = emblaCarouselVue({ loop: true, containScroll: false }, [Autoplay()])
</script>

<style scoped>
.embla {
  --slide-spacing: 1rem;
  --slide-size: 80%;
  --slide-height: 560px;
  padding: 1.6rem;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
}
.embla__slide__img {
  display: block;
  height: 560px;
  width: 100%;
  object-fit: cover;
}
</style>
