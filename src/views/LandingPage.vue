<template>
  <HeroComponent></HeroComponent>

  <div class="flex flex-col max-w-1200 page-padding">
    <WeProvideService></WeProvideService>

    <!-- pagebreak -->
    <div class="section">
      <SectionBreak></SectionBreak>
    </div>

    <div class="section">
      <!-- use-equipments -->
      <OurEquipments></OurEquipments>

      <!-- equipments -->
      <EquipmentsIndex></EquipmentsIndex>
    </div>
  </div>

  <GetQuote></GetQuote>
  <WhyChooseUs></WhyChooseUs>

  <div class="flex flex-col max-w-1200 page-padding">
    <!-- pagebreak -->
    <div class="section">
      <SectionBreak></SectionBreak>
    </div>

    <!-- get job done -->
    <GetJobDone></GetJobDone>
  </div>

  <LetsGetJobDone></LetsGetJobDone>
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import HeroComponent from '@/components/HeroComponent.vue'
import SectionBreak from '@/components/SectionBreak.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import LetsGetJobDone from '@/components/LetsGetJobDone.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import EquipmentsIndex from '@/components/EquipmentsIndex.vue'
import WeProvideService from '@/components/WeProvideService.vue'
import OurEquipments from '@/components/OurEquipments.vue'
import GetJobDone from '@/components/GetJobDone.vue'
import GetQuote from '@/components/GetQuote.vue'
</script>

<style lang="css" scoped></style>
