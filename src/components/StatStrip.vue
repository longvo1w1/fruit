<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="text-center">
    <div class="text-3xl font-extrabold text-brand-gold">
      {{ value }}
    </div>
    <div class="mt-1 text-sm text-slate-500">
      {{ label }}
    </div>
  </div>
</template>
