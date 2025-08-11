<template>
  <div class="equipments section">
    <div class="primary header">OUR EQUIPMENT</div>
    <div class="grid">
      <div class="flex flex-col equipment-card">
        <img class="title-image" :src="at40Img" loading="lazy" />
        <div class="flex flex-col justify-between equipment-description padding-responsive">
          <div>
            <div class="title">DITCH WITCH AT40</div>
            <div class="caption">
              Our all-terrain model features a specialised drill head designed to cut through rock
              with ease. With its current setup, it can install pipes up to 750 mm in diameter over
              distances of up to 300 m.
            </div>
          </div>
        </div>
        <img class="cutout trapesium" :src="cardCutout" loading="lazy" />
        <img class="cutout logo" :src="logoSmall" height="35" width="35" loading="lazy" />
      </div>
      <div class="flex flex-col equipment-card">
        <img class="title-image" :src="jt25Img" loading="lazy" />
        <div class="flex flex-col justify-between equipment-description padding-responsive">
          <div>
            <div class="title">DITCH WITCH JT25</div>
            <div class="caption">
              This smaller, highly manoeuvrable machine is perfect for shorter runs, such as road
              crossings. Ideal for pipe sizes for 300 mm, it can complete shots of up to 250 m with
              precision.
            </div>
          </div>
        </div>
        <img class="cutout trapesium" :src="cardCutout" loading="lazy" />
        <img class="cutout logo" :src="logoSmall" height="35" width="35" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoSmall from '@/assets/logo-small.svg'
import cardCutout from '@/assets/card-cutout.svg'
import at40Img from '@/assets/ditch-witch-at40-800w.png'
import jt25Img from '@/assets/ditch-witch-jt25-800w.png'
</script>

<style scoped>
/* Equipment cards */
.equipment-card {
  border-radius: var(--border-radius);
  background-color: var(--charcoal);
  position: relative;
}

.equipments .header {
  font-size: var(--heading-6);
  font-weight: var(--font-bold);
  margin-bottom: 32px;
}

.equipment-card img.cutout {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.equipment-card img.cutout.trapesium {
  width: 120px;
}

.equipment-card img.title-image {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  height: 290px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.equipment-card .title {
  font-size: var(--heading-4);
  color: var(--primary);
  font-weight: 500;
  letter-spacing: -0.96px;
  margin-bottom: 24px;
}

.equipment-card .caption {
  font-size: var(--paragraph-2);
  color: var(--white);
  margin-bottom: 50px;
}

.equipment-card button.outline {
  display: inline-flex;
  padding: 8px 12px;
  width: auto;
  font-size: var(--paragraph-2);
}

@media (min-width: 768px) {
  .equipment-card .title {
    font-size: var(--heading-3);
  }

  .equipment-card img.cutout.trapesium {
    width: 150px;
  }

  .equipment-card button.outline {
    padding: 8px 12px;
    font-size: 28px;
  }
}

@media (min-width: 1200px) {
  .equipment-card .title {
    font-size: var(--heading-2);
  }
}
</style>
