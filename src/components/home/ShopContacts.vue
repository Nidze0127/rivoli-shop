<template>
  <div class="flex flex-col items-center gap-[90px] my-24 px-[100px]">
    <h4 class="font-cormorant font-semibold text-[60px] uppercase text-center">контакты</h4>
    <div class="grid grid-cols-3 gap-12">
      <div class="flex flex-col gap-8">
        <div class="flex gap-8">
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.almaty }"
            @click="setActiveCity(CityName.almaty)"
          >
            Алматы
          </button>
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.shymkent }"
            @click="setActiveCity(CityName.shymkent)"
          >
            Шымкент
          </button>
        </div>
        <div class="flex flex-col gap-5 font-montserrat">
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/geo-pin.svg" width="23" height="23" alt="" />
            <p class="flex flex-col text-lg">
              <template v-if="activeCity === CityName.almaty">
                <span> Казахстан, </span><span>050010, г. Алматы,</span><span> ул. Кунаева, 139, 2 этаж</span>
              </template>
              <template v-else-if="activeCity === CityName.shymkent">
                <span>Казахстан,</span> <span>160000, г. Шымкент,</span>
                <span>Тамерлановское шоссе 19</span>
                <span>ТЦ "Аль-Фараби", бут. 122</span>
              </template>
            </p>
          </div>
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/phone.svg" width="23" height="23" alt="" />
            <p class="flex flex-col text-lg">
              <template v-if="activeCity === CityName.almaty">
                <span> +7 (727) 272 33 33 </span> <span>+7 (727) 272 32 72</span> <span>+7 702 112 00 66</span>
              </template>
              <span v-else-if="activeCity === CityName.shymkent">+7 775 196 0270</span>
            </p>
          </div>
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/email.svg" width="23" height="23" alt="" />
            <p class="text-lg">info@rivoli.kz</p>
          </div>
        </div>
        <div class="flex gap-3 pl-10">
          <div class="p-[6px] border border-gray-200">
            <img src="@/assets/instagram.svg" width="16" height="16" alt="Instagram link" />
          </div>
          <div class="p-[6px] border border-gray-200">
            <img src="@/assets/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
          </div>
        </div>
      </div>
      <img v-if="activeCity === CityName.almaty" src="@/assets/almaty-geo.png" class="col-span-2" alt="" />
      <img v-else-if="activeCity === CityName.shymkent" src="@/assets/shymkent-geo.png" class="col-span-2" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

enum CityName {
  almaty = 'almaty',
  shymkent = 'shymkent'
}

const activeCity = ref(CityName.almaty)

const setActiveCity = (city: CityName) => (activeCity.value = city)
</script>
