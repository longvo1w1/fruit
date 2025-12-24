<template>
  <div ref="el" class="fade" :class="{ show: shown }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const shown = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) shown.value = true
    },
    { threshold: 0.12 }
  )
  if (el.value) io.observe(el.value)
})

onBeforeUnmount(() => io?.disconnect())
</script>
