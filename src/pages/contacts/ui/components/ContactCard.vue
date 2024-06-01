<template>
  <div class="flex flex-col lg:flex-row gap-3 lg:gap-8 w-full font-montserrat">
    <div class="flex flex-col gap-3 lg:gap-10 lg:w-[400px]">
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/calendar.svg" width="24" height="24" alt="" class="mt-2" />
        <p v-if="shopData.name === 'Rivoli Almaty'" class="flex flex-col text-gray-400 lg:text-lg">
          <span>{{ $t('contacts.card.weekdays') }}: {{ shopData.workingHours.weekdays }}</span>
          <span v-if="shopData.workingHours.saturday"
            >{{ $t('contacts.card.sat') }}: {{ shopData.workingHours.saturday }}</span
          >
          <span>{{ $t('contacts.card.sun') }}: {{ $t('contacts.card.off') }}</span>
        </p>
        <p v-if="shopData.name === 'Rivoli Shymkent'" class="flex flex-col text-gray-400 lg:text-lg">
          <span>{{ $t('contacts.card.fullWeek') }}: {{ shopData.workingHours.weekdays }}</span>
          <span v-if="shopData.workingHours.saturday"
            >{{ $t('contacts.card.sat') }}: {{ shopData.workingHours.saturday }}</span
          >
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/geo-pin.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 lg:text-lg">
          <span>{{ $t('contacts.card.kz') }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.index`) }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.city`) }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.street`) }}</span>
          <span>{{ $t(`contacts.card.address.${shopData.geo}.building`) }}</span>
        </p>
      </div>
      <div class="flex items-start gap-3">
        <img src="@/assets/icons/phone.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 lg:text-lg">
          <span v-for="(number, index) in shopData.phone" :key="`phone-${index}`">{{ number }}</span>
        </p>
      </div>
      <div class="flex items-center gap-3">
        <img src="@/assets/icons/email.svg" width="24" height="24" alt="" />
        <p class="flex flex-col text-gray-400 lg:text-lg">info@rivoli.kz</p>
      </div>
      <div class="flex gap-3 pl-9">
        <a :href="shopData.insta" target="_blank" class="p-[6px] border border-green-200">
          <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
        </a>
        <!-- <div class="p-[6px] border border-green-200">
          <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
        </div> -->
      </div>
      <div v-if="shopData.warning" class="flex items-start gap-3">
        <img src="@/assets/icons/alert.svg" width="24" height="24" alt="" class="mt-2" />
        <p class="flex flex-col text-gray-400 lg:text-lg">{{ $t('contacts.card.warning') }}</p>
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
import type { ShopData } from '../../model'

defineProps<{
  shopData: ShopData
}>()
</script>
