<template>
  <div class="relative px-2 py-1 z-20 w-12" :class="{ 'hover:bg-blue-main': !isVisible, 'bg-green-100': isVisible }">
    <button type="button" class="flex items-center justify-between w-full" @click="isVisible = !isVisible">
      <span class="uppercase">{{ locale }}</span>
      <img src="@/assets/icons/arrow-down.svg" width="8" height="4" alt="" />
    </button>
    <Transition name="fade">
      <div
        v-if="isVisible"
        v-on-click-outside="closeSelector"
        class="absolute top-8 left-0 flex flex-col gap-2 w-12 py-2 bg-green-100"
      >
        <button
          v-for="(lang, index) in filteredLangs"
          :key="`lang-${index}`"
          type="button"
          class="px-2 text-left hover:bg-green-200 duration-300"
          @click="setLocale(lang)"
        >
          <span class="uppercase">{{ lang }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { vOnClickOutside } from '@vueuse/components'

const { locale } = useI18n()

const isVisible = ref(false)

const closeSelector = () => (isVisible.value = false)

const setLocale = (val: string) => {
  locale.value = val
  closeSelector()
}

const langs = ['en', 'ru', 'kz']

const filteredLangs = computed(() => langs.filter((lang) => lang !== locale.value))
</script>
