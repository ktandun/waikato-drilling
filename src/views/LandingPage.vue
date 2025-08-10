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

  <!-- get quote -->
  <div class="get-quote flex-col-small-row bg-primary flex section">
    <div class="header">GET A FREE QUOTE</div>
    <div>
      <button class="dark">CONTACT US</button>
    </div>
  </div>

  <WhyChooseUs></WhyChooseUs>

  <div class="flex flex-col max-w-1200 page-padding">
    <!-- pagebreak -->
    <div class="section">
      <SectionBreak></SectionBreak>
    </div>

    <!-- get job done -->
    <div class="flex flex-col gap-32 get-job-done section">
      <div class="header">
        WE GET THE JOB DONE WITH <span class="primary">QUALITY</span> AND
        <span class="primary">EFFICIENCY</span>
      </div>
      <div class="card flex flex-col-small-row gap-32">
        <div class="flex flex-col gap-32 flex-2">
          <div>
            <img src="/images/get-job-done-1.jpg" loading="lazy" />
          </div>
          <p>
            Priding ourselves on health and safety, all our staff are fully inducted and uphold our
            high HSE culture. Additionally to personal health and safety one of our company's core
            values is to ensure all services in the drill shot corridor are physically located or a
            risk appropriate methodology is agreed with the client prior to work commencement.
            <br />
            <br />
            We are 100% committed in delivery to a high standard and on time every time. With access
            to a network of resources, we are able to get any job done. Talk to us to get price
            optimised resourcing and sequencing for your project. We always endeavour to save you
            money without compromising high standards.
          </p>
          <div>
            <button class="outline">SEE PROJECTS</button>
          </div>
        </div>
        <div class="flex flex-col gap-32 flex-1">
          <img src="/images/get-job-done-2.jpg" loading="lazy" />
          <img src="/images/get-job-done-3.jpg" loading="lazy" />
        </div>
      </div>
    </div>
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
</script>

<style lang="css" scoped></style>
