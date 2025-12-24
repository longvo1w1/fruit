<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>

<template>
  <div class="flex flex-col items-center gap-4 text-center">
    <div
      class="w-16 h-16 rounded-full
             border border-gray-300
             flex items-center justify-center
             text-xl text-green-700 bg-white">
      {{ icon }}
    </div>

    <span class="text-xs tracking-wide text-gray-700">
      {{ label }}
    </span>
  </div>
</template>
