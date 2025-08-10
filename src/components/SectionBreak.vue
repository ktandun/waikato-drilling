<template>
  <img :src="pageBreak" class="pagebreak flex align-center" loading="lazy" />
</template>

<script setup lang="ts">
import pageBreak from '@/assets/pagebreak.svg'
</script>

<style scoped>
img.pagebreak {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1200px) {
  img.pagebreak {
    width: 67%;
  }
}
</style>
