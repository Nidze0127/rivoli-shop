<template>
  <div class="flex flex-col items-center gap-24 mt-[120px]">
    <h4 class="font-cormorant font-semibold text-[60px] uppercase text-center">новости</h4>
    <div class="grid grid-cols-2 items-center gap-8">
      <img src="@/assets/last-news.png" alt="" class="object-cover" />
      <div class="flex flex-col gap-5">
        <p class="text-lg font-montserrat text-gray-500">08.01.2021</p>
        <p class="text-2xl font-montserrat font-semibold">
          Мне по фэншуй: как правильно сделать перестановку мебели в доме
        </p>
        <p class="text-lg font-montserrat font-light">
          “В любой непонятной ситуации двигай мебель”, — смеется Александра Галкина, которая занимается фэншуй более
          десяти лет. Она поясняет: согласно этой древнекитайской практике, в каждом доме есть энергетически сильные
          точки. Они помогают реализовать планы и мечты. Соответственно, в противовес им существуют “слабые” зоны,
          где...
        </p>
        <a href="" class="flex gap-1 w-fit">
          <span class="uppercase">читать подробнее</span>
          <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1" alt="" />
        </a>
      </div>
    </div>
    <a href="" class="flex gap-1 w-fit mt-[70px]">
      <span class="uppercase">перейти в раздел новости</span>
      <img src="@/assets/link-arrow.svg" width="12" height="6" class="mt-1" alt="" />
    </a>
  </div>
</template>
