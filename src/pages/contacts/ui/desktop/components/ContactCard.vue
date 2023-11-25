<template>
  <div class="flex gap-8 w-full font-montserrat">
    <div class="flex flex-col gap-10 w-[400px]">
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/calendar.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span>Пн-пт 11:00-20:00</span>
          <span>Сб 11:00-17:00</span>
          <span>Вс выходной</span>
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/geo-pin.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span>Казахстан,</span>
          <span>050010, г. Алматы,</span>
          <span>ул. Кунаева, 139, 2 этаж</span>
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/phone.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span>+7 (727) 272 33 33</span>
          <span>+7 (727) 272 32 72 </span>
          <span>+7 702 112 00 66</span>
        </p>
      </div>
      <div class="flex items-center gap-3">
        <img src="@/assets/icons/email.svg" width="24" height="24" alt="" />
        <p class="flex flex-col text-gray-400 text-lg">info@rivoli.kz</p>
      </div>
      <div class="flex gap-3 pl-9">
        <div class="p-[6px] border border-green-200">
          <img src="@/assets/instagram.svg" width="16" height="16" alt="Instagram link" />
        </div>
        <div class="p-[6px] border border-green-200">
          <img src="@/assets/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
        </div>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/alert.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">Все звонки и сообщения обрабатываться только в рабочее время</p>
      </div>
    </div>
    <div class="w-full">
      <img src="@/assets/almaty-geo.png" class="h-full object-cover" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
