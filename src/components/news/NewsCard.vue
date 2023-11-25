<template>
  <article class="grid grid-cols-2 gap-8 font-montserrat odd:mr-[200px] even:ml-[200px]">
    <div class="flex flex-col gap-4">
      <span class="text-gray-400 text-lg">17.01.2022</span>
      <div class="flex flex-col gap-6">
        <h6 class="text-gray-400 text-2xl font-semibold">
          Мне по фэншуй: как правильно сделать перестановку мебели в доме
        </h6>
        <p class="text-gray-400 text-lg">
          “В любой непонятной ситуации двигай мебель”, — смеется Александра Галкина, которая занимается фэншуй более
          десяти лет. Она поясняет: согласно этой древнекитайской практике, в каждом доме есть энергетически сильные
          точки. Они помогают реализовать планы и мечты. Соответственно, в противовес им существуют “слабые” зоны, где
          нельзя долго находиться.
        </p>
        <RouterLink to="home" class="flex gap-1 w-fit">
          <span class="uppercase font-montserrat">читать подробнее</span>
          <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1" alt="" />
        </RouterLink>
      </div>
    </div>
    <div class="h-full w-full">
      <img src="@/assets/swiper-1.jpg" alt="" class="h-full object-cover" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
