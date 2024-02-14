<template>
  <div class="flex flex-col items-center gap-10 lg:gap-[90px] my-24 lg:px-[100px]">
    <h4 class="font-cormorant font-semibold text-3xl lg:text-[60px] uppercase text-center">контакты</h4>
    <div class="hidden lg:grid grid-cols-3 gap-12">
      <div class="flex flex-col gap-8">
        <div class="flex gap-8">
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.almaty }"
            @click="setActiveCity(CityName.almaty)"
          >
            {{ $t('home.contacts.almaty.city') }}
          </button>
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.shymkent }"
            @click="setActiveCity(CityName.shymkent)"
          >
            {{ $t('home.contacts.shymkent.city') }}
          </button>
        </div>
        <div class="flex flex-col gap-5 font-montserrat">
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/geo-pin.svg" width="23" height="23" alt="" />
            <p class="flex flex-col text-lg">
              <template v-if="activeCity === CityName.almaty">
                <span>{{ $t('home.contacts.kz') }}</span
                ><span>{{ $t('home.contacts.almaty.address') }}</span
                ><span>{{ $t('home.contacts.almaty.street') }}</span>
              </template>
              <template v-else-if="activeCity === CityName.shymkent">
                <span>{{ $t('home.contacts.kz') }}</span> <span>{{ $t('home.contacts.shymkent.address') }}</span>
                <span>{{ $t('home.contacts.shymkent.street') }}</span>
                <span>{{ $t('home.contacts.shymkent.building') }}</span>
              </template>
            </p>
          </div>
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/phone.svg" width="23" height="23" alt="" />
            <p class="flex flex-col text-lg">
              <template v-if="activeCity === CityName.almaty">
                <span> +7 (727) 272 33 33 </span> <span>+7 (727) 272 32 72</span>
              </template>
              <template v-else-if="activeCity === CityName.shymkent">
                <span>+7 775 196 0270</span> <span>+7‒707‒739‒04‒85</span>
              </template>
            </p>
          </div>
          <div class="flex items-start gap-4">
            <img src="@/assets/icons/email.svg" width="23" height="23" alt="" />
            <p class="text-lg">info@rivoli.kz</p>
          </div>
        </div>
        <div class="flex gap-3 pl-10">
          <a
            v-if="activeCity === CityName.almaty"
            href="https://www.instagram.com/rivoli.gallery/"
            target="_blank"
            class="p-[6px] border border-green-200"
          >
            <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
          </a>
          <a
            v-else-if="activeCity === CityName.shymkent"
            href="https://www.instagram.com/rivoli_gallery.shym/"
            target="_blank"
            class="p-[6px] border border-green-200"
          >
            <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
          </a>
          <!-- <div class="p-[6px] border border-green-200">
            <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
          </div> -->
        </div>
      </div>
      <img v-if="activeCity === CityName.almaty" src="@/assets/maps/almaty-geo.png" class="col-span-2" alt="" />
      <img
        v-else-if="activeCity === CityName.shymkent"
        src="@/assets/maps/shymkent-geo.png"
        class="col-span-2"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-8 items-center lg:hidden">
      <div class="flex flex-col gap-8">
        <div class="flex gap-8">
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.almaty }"
            @click="setActiveCity(CityName.almaty)"
          >
            {{ $t('home.contacts.almaty.city') }}
          </button>
          <button
            type="button"
            class="font-montserrat text-lg"
            :class="{ underline: activeCity === CityName.shymkent }"
            @click="setActiveCity(CityName.shymkent)"
          >
            {{ $t('home.contacts.shymkent.city') }}
          </button>
        </div>
      </div>
      <img v-if="activeCity === CityName.almaty" src="@/assets/maps/almaty-geo.png" class="w-full" alt="" />
      <img v-else-if="activeCity === CityName.shymkent" src="@/assets/maps/shymkent-geo.png" alt="" />
      <div class="flex flex-col w-full gap-5 font-montserrat">
        <div class="flex items-start gap-4">
          <img src="@/assets/icons/geo-pin.svg" width="23" height="23" alt="" />
          <p class="flex flex-col text-lg">
            <template v-if="activeCity === CityName.almaty">
              <span>{{ $t('home.contacts.kz') }}</span
              ><span>{{ $t('home.contacts.almaty.address') }}</span
              ><span>{{ $t('home.contacts.almaty.street') }}</span>
            </template>
            <template v-else-if="activeCity === CityName.shymkent">
              <span>{{ $t('home.contacts.kz') }}</span> <span>{{ $t('home.contacts.shymkent.address') }}</span>
              <span>{{ $t('home.contacts.shymkent.street') }}</span>
              <span>{{ $t('home.contacts.shymkent.building') }}</span>
            </template>
          </p>
        </div>
        <div class="flex items-start gap-4">
          <img src="@/assets/icons/phone.svg" width="23" height="23" alt="" />
          <p class="flex flex-col text-lg">
            <template v-if="activeCity === CityName.almaty">
              <span> +7 (727) 272 33 33 </span> <span>+7 (727) 272 32 72</span>
            </template>
            <template v-else-if="activeCity === CityName.shymkent">
              <span>+7 775 196 0270</span> <span>+7‒707‒739‒04‒85</span>
            </template>
          </p>
        </div>
        <div class="flex items-start gap-4">
          <img src="@/assets/icons/email.svg" width="23" height="23" alt="" />
          <p class="text-lg">info@rivoli.kz</p>
        </div>
      </div>
      <div class="flex gap-3 pl-10 w-full">
        <a
          v-if="activeCity === CityName.almaty"
          href="https://www.instagram.com/rivoli.gallery/"
          target="_blank"
          class="p-[6px] border border-green-200"
        >
          <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
        </a>
        <a
          v-else-if="activeCity === CityName.shymkent"
          href="https://www.instagram.com/rivoli_gallery.shym/"
          target="_blank"
          class="p-[6px] border border-green-200"
        >
          <img src="@/assets/icons/instagram.svg" width="16" height="16" alt="Instagram link" />
        </a>
        <!-- <div class="p-[6px] border border-green-200">
            <img src="@/assets/icons/whatsapp.svg" width="16" height="16" alt="Whatsapp link" />
          </div> -->
      </div>
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
