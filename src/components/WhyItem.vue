<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <div
    class="bg-white rounded-2xl p-6
           border border-slate-100
           hover:shadow-xl transition-shadow"
  >
    <h3 class="font-semibold text-slate-900 text-lg">
      {{ title }}
    </h3>
    <p class="mt-3 text-slate-500 leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>
