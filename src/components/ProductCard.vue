<script setup lang="ts">
defineProps<{
  name: string
  price: string
  image: string
  ctaLabel: string
}>()
</script>

<template>
  <article
    class="bg-white rounded-2xl overflow-hidden
           border border-slate-100
           shadow-sm hover:shadow-xl transition-shadow"
  >
    <img
      :src="image"
      :alt="name"
      loading="lazy"
      class="h-48 w-full object-cover"
    />

    <div class="p-5">
      <h3 class="font-semibold text-slate-900">
        {{ name }}
      </h3>

      <div class="mt-2 flex items-center justify-between">
        <span class="font-bold text-brand-gold">
          {{ price }}
        </span>

        <button
          class="min-h-[36px] px-4 rounded-lg
                 bg-brand-gold text-white text-sm font-semibold
                 hover:bg-brand-goldHover hover:-translate-y-[2px]
                 active:scale-95 transition-all"
        >
          {{ ctaLabel }}
        </button>
      </div>
    </div>
  </article>
</template>
