<template>
  <DefaultNavbar :border="true"></DefaultNavbar>
  <ContactUs></ContactUs>
  <FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import ContactUs from '@/components/ContactUs.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Contact Waikato Drilling – Rotorua Horizontal Drilling Specialists',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Waikato Drilling in Rotorua for expert horizontal directional drilling services across the North Island. Call 0800 693 745 or visit us at 106 Vaughan Road, Ngapuna.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.waikatodrilling.co.nz/contact',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Waikato Drilling',
        url: 'https://www.waikatodrilling.co.nz/contact',
        telephone: '0800 693 745',
        email: 'enquiries@waikatodrilling.co.nz',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '106 Vaughan Road, Ngapuna',
          addressLocality: 'Rotorua',
          postalCode: '3010',
          addressCountry: 'New Zealand',
        },
        description:
          'Contact Waikato Drilling—Rotorua’s horizontal directional drilling specialists delivering precise, efficient, and safe drilling services across the North Island.',
        image: 'https://www.waikatodrilling.co.nz/assets/logo-medium-C0MA-tRP.svg',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'North Island',
        },
      }),
    },
  ],
})
</script>

<style lang="css" scoped></style>
