<template>
  <div class="lets-get-job-done flex flex-col-small-row section">
    <div class="flex-2">
      <img class="hero" :src="letsGetJobDone" loading="lazy" />
    </div>
    <div
      class="flex flex-col text-white gap-32 flex-1 justify-center padding-32 lets-get-job-done-description"
    >
      <div class="font-size-3 font-bold">
        <span class="upperline">LET'S GET THE JOB DONE</span>
      </div>
      <div class="flex flex-col gap-8" style="font-size: 19px">
        <p><img :src="calculator" height="19" /> FREE ESTIMATE</p>
        <p><img :src="quickdelivery" height="19" /> QUICK DELIVERY</p>
        <p><img :src="committed" height="19" /> 100% COMMITTED</p>
      </div>
      <div>
        <router-link :to="{ name: 'contact' }">
          <button class="primary">CONTACT US</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import letsGetJobDone from '@/assets/lets-get-job-done.jpg'
import calculator from '@/assets/calculator.png'
import quickdelivery from '@/assets/quickdelivery.png'
import committed from '@/assets/committed.png'
</script>

<style scoped>
.lets-get-job-done {
  & img.hero {
    width: 100%;
    max-height: 540px;
    object-fit: cover;
    object-position: 50% 50%;
  }
}

.lets-get-job-done-description {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/dark-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  & p {
    display: flex;
    align-items: center;

    & img {
      margin-right: 8px;
    }
  }
}
</style>
