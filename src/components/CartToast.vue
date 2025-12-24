<script setup lang="ts">
defineProps<{ show: boolean }>()
</script>

<template>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0 translate-y-2">
    <div
      v-if="show"
      class="fixed bottom-6 right-6 z-50
             bg-[#134b39] text-white
             px-5 py-3 rounded-xl
             shadow-2xl font-semibold">
      ✔ Added to cart
    </div>
  </transition>
</template>
