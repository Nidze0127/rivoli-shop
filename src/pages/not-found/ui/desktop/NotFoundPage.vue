<template>
  <main class="h-full">
    <div class="absolute top-0 left-0 h-screen w-full bg-green-200 -z-20"></div>
    <div
      class="flex flex-col items-center h-full mt-[70px] bg-[url('@/assets/rivoli-gallery.jpg')] bg-no-repeat bg-top bg-contain bg-opacity-30"
    >
      <div class="flex flex-col items-center bg-green-200 bg-opacity-70 -mt-12">
        <h1 class="font-cormorant text-[360px] font-bold text-white">404</h1>
        <p class="font-cormorant text-[64px] font-bold text-white">{{ $t('notFound.title') }}</p>
        <RouterLink to="/" class="flex gap-1 w-fit mt-6">
          <span class="uppercase font-montserrat text-white">{{ $t('notFound.goHome') }}</span>
          <img src="@/assets/icons/arrow-white.svg" width="12" height="6" class="mt-1" alt="" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>
