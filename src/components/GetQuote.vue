<template>
  <!-- get quote -->
  <div class="get-quote flex-col-small-row bg-primary flex section">
    <div class="header">GET A FREE QUOTE</div>
    <div>
      <router-link :to="{ name: 'contact' }">
        <button class="dark">CONTACT US</button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* get-quote */
.get-quote {
  padding: var(--padding) var(--padding);
  align-items: center;
  justify-content: center;
  gap: 32px;

  & .header {
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
    color: var(--white);
  }
}

@media (min-width: 768px) {
  .get-quote {
    font-size: var(--heading-3);
    padding: var(--padding-lg) var(--padding);

    & .header {
      font-size: var(--heading-1);
    }
  }
}

@media (min-width: 1200px) {
  .get-quote {
    gap: 420px;
  }
}
</style>
