<template>
  <div class="lets-get-job-done flex flex-col-small-row section">
    <div class="flex-2">
      <img :src="letsGetJobDone" loading="lazy" />
    </div>
    <div
      class="flex flex-col text-white gap-32 flex-1 justify-center padding-32 lets-get-job-done-description"
    >
      <div class="font-size-3 font-bold">
        <span class="upperline">LET'S GET THE JOB DONE</span>
      </div>
      <div class="flex flex-col gap-8" style="font-size: 19px">
        <p>FREE ESTIMATE</p>
        <p>QUICK DELIVERY</p>
        <p>100% COMMITTED</p>
      </div>
      <div>
        <button class="primary">CONTACT US</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import letsGetJobDone from '@/assets/lets-get-job-done.jpg'
import calculator from '@/assets/calculator.png'
</script>

<style scoped>
.lets-get-job-done img {
  width: 100%;
  max-height: 540px;
  object-fit: cover;
  object-position: 50% 50%;
}

.lets-get-job-done-description {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('@/assets/dark-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
</style>
