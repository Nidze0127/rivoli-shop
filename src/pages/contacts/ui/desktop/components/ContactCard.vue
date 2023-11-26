<template>
  <div class="flex gap-8 w-full font-montserrat">
    <div class="flex flex-col gap-10 w-[400px]">
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/calendar.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span>{{ $t('contacts.card.weekdays') }} {{ shopData.workingHours.weekdays }}</span>
          <span>{{ $t('contacts.card.sat') }} {{ shopData.workingHours.saturday }}</span>
          <span v-if="shopData.workingHours.sunday"
            >{{ $t('contacts.card.sun') }} {{ shopData.workingHours.sunday }}</span
          >
          <span v-else>{{ $t('contacts.card.sun') }} {{ $t('contacts.card.off') }}</span>
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/geo-pin.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span>{{ $t('contacts.card.kz') }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.city`) }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.street`) }}</span>
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/phone.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">
          <span v-for="(number, index) in shopData.phone" :key="`phone-${index}`">{{ number }}</span>
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
      <div v-if="shopData.warning" class="flex items-start gap-3">
        <img src="@/assets/icons/alert.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 text-lg">{{ shopData.warning }}</p>
      </div>
    </div>
    <div class="w-full">
      <img v-if="shopData.address === 'almaty'" src="@/assets/maps/almaty-geo.png" class="h-full object-cover" alt="" />
      <img
        v-else-if="shopData.address === 'shymkent'"
        src="@/assets/maps/shymkent-geo.png"
        class="h-full object-cover"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShopData } from '../../../model'

defineProps<{
  shopData: ShopData
}>()
</script>
