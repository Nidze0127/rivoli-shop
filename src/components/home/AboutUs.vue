<template>
  <div class="flex flex-col gap-40">
    <div class="relative w-[1070px] self-end mt-[90px]">
      <div class="flex flex-wrap items-end gap-x-10">
        <p class="w-fit font-cormorant font-bold text-[120px] text-green-200 uppercase leading-[120px]">Галерея</p>
        <p class="w-fit font-cormorant font-bold text-[110px] uppercase leading-[120px]">Уюта и</p>
        <p class="w-fit font-cormorant font-bold text-[110px] uppercase leading-[120px]">комфорта</p>
        <p class="w-[300px] mb-5 font-light font-montserrat">
          Исключительные предметы мебели и интерьера от известных мировых производителей
        </p>
      </div>
      <ImageCarousel />
    </div>
    <div class="flex items-center gap-8 px-12">
      <img src="@/assets/rivoli-gallery.jpg" width="570" height="684" alt="" />
      <div class="flex flex-col">
        <img src="@/assets/rivoli-logo-2.svg" width="192" height="63" alt="" />
        <p class="mt-10 font-montserrat text-xl uppercase">Мы поможем вам:</p>
        <ul class="mt-4 pl-4 w-[470px] list-disc font-montserrat text-gray-400">
          <li>создать особенный проект вашего интерьера</li>
          <li>подобрать текстиль, освещение, кухонные принадлежности и другие предметы декора</li>
          <li>оформить заказ на мебель среднего и люкс класса</li>
        </ul>
        <a href="" class="flex gap-1 w-fit mt-6">
          <span class="uppercase">Подробнее</span>
          <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from './ImageCarousel.vue'
</script>
