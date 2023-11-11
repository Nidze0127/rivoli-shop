<template>
    <Swiper class="mySwiper"     
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :loop="true"
      :slidesPerView="3"
      :spaceBetween="100"
      :centeredSlides="true"
      :modules="modules"
    >
      <SwiperSlide>
        <img src="@/assets/AyanAG_el_jeffe_d536bf08-b3d8-42f6-936d-cdddfe9d6498.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_nidzmens_92dd1e8e-6a15-4ab8-9086-fe4b702ec9ec.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_valorant_3522de12-492e-4700-8f81-9dc3c8c64eb2.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_valorant_e56feaf4-2714-4aa1-a124-8afc3d033de9.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_el_jeffe_d536bf08-b3d8-42f6-936d-cdddfe9d6498.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_nidzmens_92dd1e8e-6a15-4ab8-9086-fe4b702ec9ec.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_valorant_3522de12-492e-4700-8f81-9dc3c8c64eb2.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/AyanAG_valorant_e56feaf4-2714-4aa1-a124-8afc3d033de9.png" alt="">
      </SwiperSlide>
    </Swiper>
  </template>

  <script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    const  modules = [Pagination, Navigation]
  </script>
  