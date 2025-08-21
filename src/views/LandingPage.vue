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

import { useHead } from '@vueuse/head'

useHead({
  title: 'Waikato Drilling – Rotorua’s Leading Horizontal Directional Drilling Specialists',
  meta: [
    {
      name: 'description',
      content:
        'Waikato Drilling provides state-of-the-art horizontal directional drilling across the North Island from Rotorua, delivering precision, safety, efficiency, and top-quality outcomes.',
    },
    {
      name: 'keywords',
      content:
        'horizontal directional drilling, drilling Rotorua, North Island drilling, Ditch Witch AT40, Ditch Witch JT25, precision drilling, drilling safety, efficient drilling NZ',
    },
    {
      property: 'og:title',
      content: 'Rotorua’s Horizontal Directional Drilling Experts',
    },
    {
      property: 'og:description',
      content:
        'From Rotorua, Waikato Drilling delivers accurate and efficient horizontal directional drilling across the North Island using modern equipment and a strong health & safety focus.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.waikatodrilling.co.nz/',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'Waikato Drilling – Rotorua’s Horizontal Directional Drilling Specialists',
    },
    {
      name: 'twitter:description',
      content:
        'Expert horizontal directional drilling services across the North Island from Rotorua. Precision, safety, and efficiency guaranteed.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.waikatodrilling.co.nz/',
    },
  ],
})
</script>

<style lang="css" scoped></style>
