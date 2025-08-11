<template>
  <!-- services -->
  <div class="flex services padding-responsive section">
    <div class="flex flex-col flex-1 services-description">
      <img class="logo" :src="logoLarge" loading="lazy" />
      <div class="header">
        <span class="upperline">WE PROVIDE TOP TIER SERVICE</span>
      </div>
      <p>
        Based in mighty Waikato we operate throughout the North Island in Horizontal Directional
        Drilling using our top of the line and modern plant and equipment.
        <br />
        <br />
        We pride ourselves in leading the industry in accuracy, efficiency and, health and safety.
        Every project is delivered to the highest standard.
      </p>
    </div>
    <div class="services-cover flex-1">
      <img class="cover" :src="weProvideService" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoLarge from '@/assets/logo-large.png'
import weProvideService from '@/assets/we-provide-top-tier-service-800w.jpg'
</script>

<style scoped>
/* Services */
.services {
  background-color: var(--charcoal);
  border-radius: var(--border-radius);
  flex-direction: column;
  color: var(--white);
  gap: 32px;

  & .services-description {
    gap: 32px;
  }

  & .header {
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
    width: auto;
  }

  & img {
    object-fit: cover;
    object-position: 50% 50%;
  }

  & img.logo {
    max-width: 320px;
  }

  & img.cover {
    height: auto;
    max-width: 100%;
    max-height: 555px;
  }
}

@media (min-width: 768px) {
  .services {
    gap: min(5vw, 60px);
    flex-direction: row;

    & .header {
      font-size: var(--heading-4);
    }

    & .services-description {
      gap: min(5vw, 60px);
    }

    & img.cover {
      height: 100%;
      width: auto;
    }
  }
}
</style>
