<template>
  <DefaultNavbar :border="true"></DefaultNavbar>
  <ContactUs></ContactUs>
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import ContactUs from '@/components/ContactUs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style lang="css" scoped></style>
