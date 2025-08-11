<template>
  <img :src="src" :srcset="computedSrcset" :sizes="sizes" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

interface SrcsetImage {
  src: string
  descriptor: string // e.g. "1x", "2x", "480w"
}

const props = defineProps<{
  src: string
  srcsetImages: SrcsetImage[]
  sizes?: string
}>()

const { src, srcsetImages, sizes } = toRefs(props)

const computedSrcset = computed(() =>
  srcsetImages.value.map(({ src, descriptor }) => `${src} ${descriptor}`).join(', '),
)
</script>
