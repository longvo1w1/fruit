<script setup lang="ts">
import { useI18n } from '~/i18n'

const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="flex gap-2">
    <button
      v-for="l in ['vi', 'en']"
      :key="l"
      @click="setLocale(l)"
      class="px-3 py-1 rounded-full border text-xs"
      :class="locale === l ? 'border-brand text-brand font-semibold' : ''"
    >
      {{ l.toUpperCase() }}
    </button>
  </div>
</template>
