<template>
  <div class="why-choose-us">
    <div class="flex flex-col max-w-1200 content">
      <div class="header justify-center flex">
        <span class="text-white upperline">WHY CHOOSE US</span>
      </div>
      <div class="flex flex-col-small-row justify-between align-center gap-32">
        <div class="values-icons">
          <img :src="safeImg" loading="lazy" />
          <div class="font-size-6 text-center">SAFE</div>
        </div>
        <div class="values-icons">
          <img :src="costEffectiveImg" loading="lazy" />
          <div class="font-size-6 text-center">COST EFFECTIVE</div>
        </div>
        <div class="values-icons">
          <img :src="efficientImg" loading="lazy" />
          <div class="font-size-6 text-center">EFFICIENT</div>
        </div>
        <div class="values-icons">
          <img :src="envFriendlyImg" loading="lazy" />
          <div class="font-size-6 text-center">ENVIRONMENTALLY FRIENDLY</div>
        </div>
        <div class="values-icons">
          <img :src="highQualityImg" loading="lazy" />
          <div class="font-size-6 text-center">HIGH QUALITY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import safeImg from '@/assets/safe.svg'
import costEffectiveImg from '@/assets/costeffective.svg'
import efficientImg from '@/assets/efficient.svg'
import envFriendlyImg from '@/assets/environmentallyfriendly.svg'
import highQualityImg from '@/assets/highquality.svg'
</script>

<style scoped>
/* why-choose-us */
.why-choose-us {
  padding: 100px 0;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/why-choose-us.jpg');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.why-choose-us .content {
  gap: 60px;
}

.why-choose-us .header {
  font-size: var(--heading-4);
  font-weight: var(--font-bold);
}

@media (min-width: 768px) {
  .why-choose-us img {
    width: calc(70vw / 5);
    max-width: 150px;
  }
}

@media (min-width: 1200px) {
  .why-choose-us .content {
    gap: 98px;
  }
}
</style>
