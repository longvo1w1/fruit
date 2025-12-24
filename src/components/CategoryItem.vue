<script setup lang="ts">
defineProps<{ name: string; image: string }>()
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div
      class="w-28 h-28 rounded-full bg-white shadow
             flex items-center justify-center
             ring-4 ring-white overflow-hidden">
      <img :src="image" class="w-full h-full object-cover" />
    </div>

    <span class="text-xs tracking-widest text-gray-700">
      {{ name }}
    </span>
  </div>
</template>
