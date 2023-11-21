<template>
  <div class="relative flex flex-col items-center pt-[246px]">
    <img src="@/assets/logo-back.svg" class="absolute top-0 -right-[200px]" alt="" />
    <h4 class="text-[60px] uppercase font-semibold font-cormorant">галерея</h4>
    <div class="grid grid-cols-5 items-center gap-8 px-16 mt-[120px]">
      <div class="flex flex-col gap-24 col-span-2">
        <div class="flex flex-col gap-4">
          <img src="@/assets/pre-gallery-1.png" width="384" height="586" alt="" />
          <p class="font-montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div class="flex flex-col gap-4">
          <img src="@/assets/pre-gallery-2.png" width="384" height="586" alt="" />
          <p class="font-montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 col-span-3">
        <img src="@/assets/pre-gallery-3.png" width="716" height="716" alt="" />
        <p class="font-montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
    <a href="" class="flex gap-1 w-fit mt-12">
      <span class="uppercase">перейти в галерею</span>
      <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1" alt="" />
    </a>
  </div>
</template>
